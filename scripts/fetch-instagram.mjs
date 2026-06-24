// Syncs photos from the Instagram Graph API into public/images/photography/.
//
// Curation model: every image ID that has ever been synced is recorded in
// src/data/instagram-sync-state.json. A sync only downloads IDs that are NOT in
// that ledger, so any photo you DELETE locally is gone for good — its ID stays in
// the ledger and is never re-downloaded. New posts (new IDs) are added.
//
// The gallery is built straight from the files on disk, so deleting a .jpg before
// committing is all it takes to remove a photo.
//
// Uses the Instagram Graph API via the Facebook Graph host with a non-expiring
// Page access token (Business account linked to a Facebook Page).
//
// Credentials (env var, or a gitignored .env.local in the project root):
//   INSTAGRAM_TOKEN     non-expiring Page access token
//   INSTAGRAM_USER_ID   Instagram Business account id
// Optional:
//   IG_INCLUDE_VIDEOS   "true" to include video posts (uses their thumbnail)
//   IG_MARK_ONLY        "true" to record all current IDs as synced WITHOUT
//                       downloading (freezes the current on-disk set as final)
//
// Usage: npm run sync:instagram

import { mkdir, readFile, writeFile, readdir, unlink } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images', 'photography');
const STATE_PATH = path.join(ROOT, 'src', 'data', 'instagram-sync-state.json');

const API = 'https://graph.facebook.com';
const API_VERSION = 'v21.0';
const FULL_MAX = 1600;
const THUMB_MAX = 700;
const INCLUDE_VIDEOS = process.env.IG_INCLUDE_VIDEOS === 'true';
const MARK_ONLY = process.env.IG_MARK_ONLY === 'true';

function loadEnvLocal() {
  const p = path.join(ROOT, '.env.local');
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
loadEnvLocal();

const TOKEN = process.env.INSTAGRAM_TOKEN;
const USER_ID = process.env.INSTAGRAM_USER_ID;
if (!TOKEN || !USER_ID) {
  console.error('✗ INSTAGRAM_TOKEN and INSTAGRAM_USER_ID must be set (env or .env.local).');
  process.exit(1);
}

const MEDIA_FIELDS =
  'id,media_type,media_url,thumbnail_url,timestamp,' +
  'children{id,media_type,media_url,thumbnail_url}';

async function loadSyncedIds() {
  try {
    const raw = JSON.parse(await readFile(STATE_PATH, 'utf8'));
    return new Set(raw.syncedIds || []);
  } catch {
    return new Set();
  }
}

async function saveSyncedIds(set) {
  await writeFile(
    STATE_PATH,
    JSON.stringify({ syncedIds: [...set].sort() }, null, 2) + '\n'
  );
}

/** Fetch every page of the user's media (metadata only — cheap). */
async function fetchAllMedia() {
  let url =
    `${API}/${API_VERSION}/${USER_ID}/media` +
    `?fields=${encodeURIComponent(MEDIA_FIELDS)}&limit=100&access_token=${TOKEN}`;
  const all = [];
  while (url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Instagram API ${res.status}: ${(await res.text()).slice(0, 400)}`);
    const json = await res.json();
    if (Array.isArray(json.data)) all.push(...json.data);
    url = json.paging?.next || null;
  }
  return all;
}

/** Expand posts into individual images (carousels become their image children). */
function flattenPhotos(media) {
  const photos = [];
  for (const item of media) {
    const ts = Math.floor(Date.parse(item.timestamp) / 1000);
    const push = (id, mediaUrl) => photos.push({ ts, id, mediaUrl });
    if (item.media_type === 'IMAGE') {
      if (item.media_url) push(item.id, item.media_url);
    } else if (item.media_type === 'VIDEO') {
      if (INCLUDE_VIDEOS && item.thumbnail_url) push(item.id, item.thumbnail_url);
    } else if (item.media_type === 'CAROUSEL_ALBUM') {
      for (const child of item.children?.data || []) {
        if (child.media_type === 'IMAGE' && child.media_url) push(child.id, child.media_url);
        else if (child.media_type === 'VIDEO' && INCLUDE_VIDEOS && child.thumbnail_url)
          push(child.id, child.thumbnail_url);
      }
    }
  }
  return photos;
}

async function processImage(photo) {
  const base = `${photo.ts}-${photo.id}`;
  if (existsSync(path.join(IMAGES_DIR, `${base}.jpg`))) return; // already downloaded
  const res = await fetch(photo.mediaUrl);
  if (!res.ok) throw new Error(`download ${res.status} for ${photo.id}`);
  const input = Buffer.from(await res.arrayBuffer());
  await sharp(input)
    .rotate()
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(IMAGES_DIR, `${base}.jpg`));
  await sharp(input)
    .rotate()
    .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 75, mozjpeg: true })
    .toFile(path.join(IMAGES_DIR, `${base}--thumb.jpg`));
}

/** Remove thumbnails whose full image was deleted (manual-curation cleanup). */
async function pruneOrphanThumbs() {
  const files = existsSync(IMAGES_DIR) ? await readdir(IMAGES_DIR) : [];
  const fulls = new Set(files.filter((f) => f.endsWith('.jpg') && !f.endsWith('--thumb.jpg')));
  for (const f of files) {
    if (f.endsWith('--thumb.jpg') && !fulls.has(f.replace('--thumb.jpg', '.jpg'))) {
      await unlink(path.join(IMAGES_DIR, f));
    }
  }
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  await pruneOrphanThumbs();

  const synced = await loadSyncedIds();
  console.log(`→ Ledger has ${synced.size} previously-synced ids.`);

  const media = await fetchAllMedia();
  const photos = flattenPhotos(media);
  const fresh = photos.filter((p) => !synced.has(p.id));
  console.log(`→ ${photos.length} images in feed, ${fresh.length} new.`);

  if (MARK_ONLY) {
    photos.forEach((p) => synced.add(p.id));
    await saveSyncedIds(synced);
    console.log(`✓ Marked all ${synced.size} ids as synced (no downloads). Current files kept.`);
    return;
  }

  let added = 0;
  for (const p of fresh) {
    try {
      await processImage(p);
      synced.add(p.id);
      added++;
      if (added % 25 === 0) {
        await saveSyncedIds(synced); // checkpoint so progress survives interruptions
        console.log(`  …${added}/${fresh.length}`);
      }
    } catch (err) {
      console.warn(`  ✗ skipping ${p.id}: ${err.message}`);
    }
  }

  await saveSyncedIds(synced);
  console.log(`✓ Downloaded ${added} new photos. Ledger now ${synced.size} ids.`);
  if (added) console.log('  Review public/images/photography/, delete any you do not want, then commit.');
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});

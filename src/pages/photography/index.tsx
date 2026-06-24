import { GetStaticProps } from 'next';
import Head from 'next/head';
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';
import { InstagramPhoto } from '@/data/types';
import Gallery from '@/components/photography/Gallery';

interface PhotographyPageProps {
  photos: InstagramPhoto[];
}

// The gallery is derived straight from the image files on disk, so deleting a
// .jpg is all it takes to remove a photo. Filenames are `<unix-ts>-<id>.jpg`,
// so sorting by name descending gives newest-first.
export const getStaticProps: GetStaticProps<PhotographyPageProps> = async () => {
  const dir = path.join(process.cwd(), 'public', 'images', 'photography');
  let photos: InstagramPhoto[] = [];
  try {
    const files = (await readdir(dir)).filter(
      (f) => f.endsWith('.jpg') && !f.endsWith('--thumb.jpg')
    );
    // Filenames are `<unix-timestamp>-<id>.jpg` — sort by timestamp, newest first.
    const ts = (f: string) => parseInt(f.split('-')[0], 10) || 0;
    files.sort((a, b) => ts(b) - ts(a));
    photos = await Promise.all(
      files.map(async (file) => {
        const thumb = file.replace(/\.jpg$/, '--thumb.jpg');
        const hasThumb = existsSync(path.join(dir, thumb));
        let width = 0;
        let height = 0;
        try {
          // Read dimensions (header only) so the gallery can lay out justified rows
          // that preserve each photo's aspect ratio.
          const dims = imageSize(await readFile(path.join(dir, hasThumb ? thumb : file)));
          width = dims.width ?? 0;
          height = dims.height ?? 0;
        } catch {}
        return {
          id: file.replace(/\.jpg$/, ''),
          src: `/images/photography/${file}`,
          thumb: hasThumb ? `/images/photography/${thumb}` : `/images/photography/${file}`,
          width,
          height,
        };
      })
    );
  } catch {
    photos = [];
  }
  return { props: { photos } };
};

export default function PhotographyPage({ photos }: PhotographyPageProps) {
  return (
    <>
      <Head>
        <title>Photography · Fabio Sangregorio</title>
        <meta name="description" content="Photography by Fabio Sangregorio." />
      </Head>

      <main className="photography">
        <header className="photography__header">
          <div className="photography__title">Fabio Sangregorio</div>
        </header>

        <Gallery photos={photos} />

        <footer className="photography__footer">
          <a href="https://instagram.com/fabio.sang" target="_blank" rel="noopener noreferrer">
            @fabio.sang
          </a>
        </footer>
      </main>
    </>
  );
}

'use client';
import { useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import { InstagramPhoto } from '@/data/types';

interface GalleryProps {
  photos: InstagramPhoto[];
}

export default function Gallery({ photos }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  if (!photos.length) {
    return <p className="pg-empty">No photos to show yet — check back soon.</p>;
  }

  const albumPhotos = photos.map((p) => ({
    src: p.thumb,
    width: p.width || 1,
    height: p.height || 1,
  }));
  const slides = photos.map((p) => ({
    src: p.src,
    width: p.width || undefined,
    height: p.height || undefined,
  }));

  return (
    <>
      <MasonryPhotoAlbum
        photos={albumPhotos}
        columns={(width) => (width < 720 ? 2 : width < 1460 ? 3 : 4)}
        spacing={24}
        onClick={({ index: i }) => setIndex(i)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Counter]}
      />
    </>
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function DigitalPhotography() {
  const photos = [
    '/images/treesphoto.jpg',
    '/images/grass.png',
    '/images/mountain.jpg',
    '/images/roof.jpeg',
    '/images/synagogue.jpeg',
    '/images/flowers.jpeg',
    '/images/malinda.jpeg',
    '/images/rooftop.jpeg',
    '/images/synagogue .jpeg',
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 tracking-widest mb-4">PORTFOLIO</p>
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Digital Photography</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Contemporary digital work capturing moments across portraiture, street, architecture, and landscape
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Digital Photography ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((src) => ({ src }))}
      />
    </div>
  );
}

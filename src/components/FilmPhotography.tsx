import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function FilmPhotography() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const photos = [
    '/images/andrewsmom.jpg',
    '/images/Badass.jpg',
    '/images/bed.jpg',
    '/images/biking.jpg',
    '/images/boat.jpg',
    '/images/Bridge.jpg',
    '/images/Cow.jpg',
    '/images/Hilary.jpg',
    '/images/houses.jpg',
    '/images/kids.jpg',
    '/images/reflection.jpg',
    '/images/shower.jpg',
    '/images/SmallRV.jpg',
    '/images/trees.jpg',
    '/images/waves.jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="serif-font text-5xl md:text-7xl mb-6">35mm Film Photography</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Only having 36 exposures per roll allows for a more tactile and intentional approach to image making.
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="serif-font text-4xl mb-16 text-center">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Film Photography ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
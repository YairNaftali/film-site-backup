import { ExternalLink, FileText, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { thumb, full } from '../img';

export function TheGolem() {
  const btsPhotos = [
    '/images/pic (5).jpg',
    '/images/pic (1).jpg',
    '/images/pic (19).jpg',
    '/images/pic (17).jpg',
    '/images/pic (15).jpg',
    '/images/pic (14).jpg',
    '/images/pic (4).jpg',
    '/images/pic (9).jpg',
    '/images/pic (3).jpg',
  ];

  const productionStills = [
    '/images/still1.jpg',
    '/images/still2.jpg',
    '/images/still3.jpg',
    '/images/still4.jpg',
    '/images/still5.jpg',
    '/images/still6.jpg',
  ];

  const headshotSlides = ['/images/b5bfc1f9a7-headshot.jpg'];
  const crewSlides = ['/images/crew.jpg'];
  const creators = [
    { name: 'Aline Frances Chalfin', roles: 'Director, Writer' },
    { name: 'Spencer Linn', roles: 'Director' },
    { name: 'Aydan Metsch', roles: 'Director, Writer' },
  ];
  const crewCredits: { role: string; names: string[]; wide?: boolean }[] = [
    { role: 'Directed by', names: ['Aline Chalfin', 'Spencer Linn', 'Aydan Metsch'] },
    { role: 'Written by', names: ['Aydan Metsch', 'Aline Chalfin'] },
    { role: 'Director of Photography', names: ['Aydan Metsch'] },
    { role: 'Ami', names: ['Adam Rydl'] },
    { role: 'Rabbi', names: ['Bogomil Shopov'] },
    {
      role: 'Extras',
      names: ['Barry Evans, Emmet Kneafsey, James Hillefeld, Steven Burgess, Graham Hazleton'],
      wide: true,
    },
    { role: 'Producer', names: ['Tamara Hajičková'] },
    { role: 'Production Manager', names: ['Jiřina Chytilová'] },
    { role: '1st AD', names: ['Zipporah Fornah'] },
    { role: 'Art Director', names: ['Maya Giurgi'] },
    { role: '1st AC', names: ['Joe Sato Murphy'] },
    { role: '2nd AC', names: ['Nic Hatton'] },
    { role: 'Camera Supervisor', names: ['Riyana Lama'] },
    { role: 'Gaffer', names: ['JP Tehamlik'] },
    { role: 'Grip', names: ['Emmet Kneafsey'] },
    { role: 'Gaffer Assistant', names: ['James Hillefeld'] },
    { role: 'Sound', names: ['Morgan Andrade'] },
    { role: 'Boom Operator', names: ['Talya Dersu'] },
    { role: 'Continuity', names: ['Graham Hazleton'] },
    { role: 'Make-up Artist', names: ['Evie Rhody'] },
    { role: '1st PA', names: ['Emma Szumowská'] },
    { role: '2nd PA', names: ['Michaella Brollová'] },
    {
      role: 'Behind-the-Scenes Photography',
      names: ['Steven Burgess, Elmira & Duarte / FAMU INTERNATIONAL'],
      wide: true,
    },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [stillsOpen, setStillsOpen] = useState(false);
  const [stillsIndex, setStillsIndex] = useState(0);
  const [headshotOpen, setHeadshotOpen] = useState(false);
  const [crewOpen, setCrewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/images/golem.mp4"
            poster="/images/golem-poster.webp"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>
        <div className="relative z-10 text-center px-6">
          <img
            src={thumb('/images/golem.png')}
            alt="The Golem"
            className="mx-auto mb-6"
            style={{ width: '700px', maxWidth: '100%', height: 'auto' }}
          />
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            In 17th century Prague, a young boy facing persecution seeks help by reviving the ancient legend of the Golem
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://filmfreeway.com/TheGolem60"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors tracking-wider"
            >
              <ExternalLink size={18} />
              Watch Film
            </a>
          </div>
        </div>
      </section>

      {/* Film Synopsis */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="text-white/40 mb-2 tracking-wider">YEAR</p>
              <p className="text-xl">2025</p>
            </div>
            <div>
              <p className="text-white/40 mb-2 tracking-wider">DURATION</p>
              <p className="text-xl">7 minutes 31 seconds</p>
            </div>
            <div>
              <p className="text-white/40 mb-2 tracking-wider">FORMAT</p>
              <p className="text-xl">16mm</p>
            </div>
          </div>
          <div className="max-w-none">
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              A young apprentice studies ancient alchemy and kabbalistic texts in secret when he hears a knock at the door and scrambles to hide the texts from his mentor.
            </p>
          </div>
        </div>
      </section>

      {/* Production Stills */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <Camera className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Production Stills</h2>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-3xl">
            A selection of still frames and on-set captures highlighting the tone and visual style of <em>The Golem</em>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionStills.map((photo, i) => (
              <button
                type="button"
                key={i}
                className="group relative block w-full aspect-video overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  setStillsIndex(i);
                  setStillsOpen(true);
                }}
              >
                <ImageWithFallback
                  src={thumb(photo)}
                  alt={`Production still ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
            <Lightbox
              open={stillsOpen}
              close={() => setStillsOpen(false)}
              index={stillsIndex}
              slides={productionStills.map((src) => ({ src: full(src) }))}
            />
          </div>
        </div>
      </section>

      {/* Meet the Creators & Meet the Crew Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          {/* Meet the Creators */}
          <div className="mb-24">
            <h2 className="serif-font text-4xl mb-8">Meet the Creators</h2>
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <button
                type="button"
                onClick={() => setHeadshotOpen(true)}
                className="md:col-span-2 block w-full aspect-[3/2] overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={thumb('/images/b5bfc1f9a7-headshot.jpg')}
                  alt="Film creators"
                  className="w-full h-full object-cover"
                />
              </button>
              <ul className="md:col-span-3 border-b border-white/10">
                {creators.map((c) => (
                  <li
                    key={c.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-5 border-t border-white/10"
                  >
                    <span className="serif-font text-2xl">{c.name}</span>
                    <span className="text-white/60">{c.roles}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Meet the Crew */}
          <div>
            <h2 className="serif-font text-4xl mb-8">Meet the Crew</h2>
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
              <button
                type="button"
                onClick={() => setCrewOpen(true)}
                className="md:col-span-2 block w-full aspect-[4/3] overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={thumb('/images/crew.jpg')}
                  alt="Film crew"
                  className="w-full h-full object-cover"
                />
              </button>
              <dl className="md:col-span-3 grid grid-flow-dense grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {crewCredits.map((c, i) => (
                  <div
                    key={c.role}
                    // no rule above the first row: 2 cells on small screens, 3 from lg up
                    className={`border-white/10 ${
                      i < 2 ? '' : i === 2 ? 'border-t pt-3 lg:border-t-0 lg:pt-0' : 'border-t pt-3'
                    } ${c.wide ? 'col-span-full' : ''}`}
                  >
                    <dt className="text-sm text-white/40 mb-1">{c.role}</dt>
                    {c.names.map((n) => (
                      <dd key={n} className="text-white/90">
                        {n}
                      </dd>
                    ))}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Script Development Section */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Script Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white/70 mb-4">
                The story of <em>The Golem</em> was inspired by Jewish folklore and adapted into a short film exploring themes of fear, faith, and mythic protection.
              </p>
              <p className="text-white/70">
                The screenplay was refined over several drafts, focusing on mood, symbolism, and the balance between spiritual and emotional storytelling.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-900 border border-white/10">
                <h4 className="text-lg mb-3">Final Script</h4>
                <p className="text-white/60">7 pages, written and revised between 2024–2025</p>
              </div>
              <div className="p-6 bg-zinc-900 border border-white/10">
                <h4 className="text-lg mb-3">Locations</h4>
                <p className="text-white/60">The Alchemy Museum, New Libeň Synagogue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <Camera className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Behind the Scenes</h2>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-3xl">
            A visual journey through the production process, capturing the collaboration,
            creativity, and dedication that brought <em>The Golem</em> to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {btsPhotos.map((photo, i) => (
              <button
                type="button"
                key={i}
                className="group relative block w-full aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <ImageWithFallback
                  src={thumb(photo)}
                  alt={`Behind the scenes ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            ))}
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={index}
              slides={btsPhotos.map((src) => ({ src: full(src) }))}
            />
          </div>
        </div>
      </section>
      <Lightbox
        open={headshotOpen}
        close={() => setHeadshotOpen(false)}
        index={0}
        slides={headshotSlides.map((s) => ({ src: full(s) }))}
      />

      <Lightbox
        open={crewOpen}
        close={() => setCrewOpen(false)}
        index={0}
        slides={crewSlides.map((s) => ({ src: full(s) }))}
      />
    </div>
  );
}
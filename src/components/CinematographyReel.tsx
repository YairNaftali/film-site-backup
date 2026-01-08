import { Play } from 'lucide-react';

export function CinematographyReel() {
  const reels = [
    {
      id: 1,
      title: 'Commercial Reel',
      description: 'A collection of works showcasing the power of storytelling',
      thumbnail: 'https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0b2dyYXBoeSUyMGZpbG0lMjByZWVsfGVufDF8fHx8MTc2MDMwNTQwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const reel = reels[0];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Cinematography Reel</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Coming&nbsp;Soon
          </p>
        </div>
      </section>

      {/* Single Reel Section: Commercial Reel 2024 */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="group">
            <div className="relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer">
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={32} fill="white" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="serif-font text-3xl mb-3">{reel.title}</h3>
              <p className="text-white/60 text-lg">{reel.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

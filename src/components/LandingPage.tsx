import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Background Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/beddark.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="serif-font text-6xl md:text-8xl mb-6 tracking-wide">
            Bubbe Meise
          </h1>
          <p className="elegant-font text-2xl md:text-4xl text-white/80 mb-3">
            Productions
          </p>
          <p className="text-base md:text-lg text-white/70 mb-8">
            By Aline Frances Chalfin
          </p>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
             Bubbe always told us to never let the truth get in the way of a good story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/the-golem"
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors tracking-wider"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors tracking-wider"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={32} />
        </div>
      </section>

      
      {/* Featured Projects Preview */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="serif-font text-4xl md:text-5xl text-center mb-16">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/cinematography" className="group relative overflow-hidden aspect-[4/5]">
              <img
                src="/images/cinematography.jpg"
                alt="Cinematography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="serif-font text-2xl">Cinematography Reel</h3>
              </div>
            </Link>

            <Link to="/the-golem" className="group relative overflow-hidden aspect-[4/5]">
              <img
                src="/images/golemtextposter.jpg"
                alt="The Golem"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                {/* Intentionally left blank to remove visible link text */}
              </div>
            </Link>

            <Link to="/jewish-museum" className="group relative overflow-hidden aspect-[4/5]">
              <img
                src="/images/croppedmuseum.jpg"
                alt="Jewish Museum"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="serif-font text-2xl">Jewish Museum of Switzerland</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/cinematography', label: 'Cinematography Reel' },
    { path: '/the-golem', label: 'The Golem' },
    { path: '/jewish-museum', label: 'Jewish Museum' },
    { path: '/digital-photography', label: 'Digital Photography' },
    { path: '/film-photography', label: 'Film Photography' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="serif-font text-white text-xl tracking-wide">
            BUBBA MEISA PRODUCTIONS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              link.path === '/cinematography' ? (
                <span
                  key={link.path}
                  className="text-sm tracking-wider text-white/60 cursor-default"
                >
                  Cinematography Reel Coming Soon
                </span>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {links.map((link) => (
              link.path === '/cinematography' ? (
                <span
                  key={link.path}
                  className="block text-sm tracking-wider text-white/60"
                >
                  Cinematography Reel <br />Coming Soon
                </span>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

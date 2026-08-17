import { Mail, Phone, MapPin, Linkedin, Instagram, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Let's Collaborate</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
          </p>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="relative aspect-[3/4] mb-8">
                <ImageWithFallback
                  src="/images/contactphoto.jpg"
                  alt="Aline Frances"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="/images/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors tracking-wider w-full justify-center"
              >
                <Download size={20} />
                Download Resume (PDF)
              </a>
            </div>

            <div>
              <h2 className="serif-font text-4xl mb-8">Aline Frances Chalfin</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Thanks for stopping by! I'm always interested in challenging, creative opportunities and projects that tell meaningful stories.

My experience creating images and producing content including writing screenplays, making films, and curating museum exhibitions has taught me to thread stories together while giving me the opportunity to work with diverse media in a variety of environments. I have worn a lot of hats in my past creative roles, allowing me to speak the language of multiple disciplines in fast-paced work-spaces.

I am open to learning more about all opportunities and look forward to connecting.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="serif-font text-3xl mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="text-white/60 mt-1" size={24} />
                  <div>
                    <p className="text-white/40 mb-1">Email</p>
                    <a href="mailto:alinechalfin@gmail.com" className="text-lg hover:text-white/80 transition-colors">
                      alinechalfin@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-white/60 mt-1" size={24} />
                  <div>
                    <p className="text-white/40 mb-1">Phone</p>
                    <a href="tel:+19176533623" className="text-lg hover:text-white/80 transition-colors">
                      +1 (917) 653-3623
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-xl mb-4">Follow My Work</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bubbamisehproductions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aline-chalfin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Vimeo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="serif-font text-3xl mb-8">Send a Message</h2>
              <form
                action="https://formspree.io/f/mdkqzznb"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/20 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/20 text-white"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-black/40 border border-white/20 text-white"
                />

                <button
                  type="submit"
                  className="px-6 py-2 border border-white/40 hover:bg-white hover:text-black transition-colors tracking-wider"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 text-green-400 mb-6">
            Currently Available for New Projects
          </div>
          <h3 className="serif-font text-3xl mb-4">Open for Collaborations</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            I'm always interested in challenging projects, creative collaborations, 
            and opportunities to tell meaningful stories through film and photography.
          </p>
        </div>
      </section>
    </div>
  );
}

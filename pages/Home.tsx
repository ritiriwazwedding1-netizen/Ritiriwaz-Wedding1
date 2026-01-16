import React from 'react';
import { NavLink } from 'react-router-dom';
import { FILMS, PHOTOS, TESTIMONIALS, getWhatsAppLink } from '../constants';
import { Icons } from '../components/Icons';

export const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-royal-navy">
          <img 
            src="https://picsum.photos/id/1059/1920/1080" 
            alt="Cinematic Wedding Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-navy via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-royal-ivory leading-tight animate-fade-in-up">
            Framing <span className="text-royal-gold italic">Emotions</span> in Every Ritual
          </h1>
          <p className="font-sans text-gray-300 text-lg md:text-xl tracking-wide max-w-2xl mx-auto">
            Every wedding has a story. We don’t just capture how it looked, we capture how it felt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href={getWhatsAppLink()} 
              className="w-full sm:w-auto px-8 py-4 bg-royal-gold text-royal-navy font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              WhatsApp Now
            </a>
            <NavLink 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 border border-royal-ivory text-royal-ivory font-bold uppercase tracking-widest hover:bg-royal-ivory hover:text-royal-navy transition-colors"
            >
              Check Availability
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Films */}
      <section className="py-20 bg-royal-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-royal-navy">Featured Films</h2>
            <div className="w-24 h-1 bg-royal-gold mx-auto"></div>
            <p className="text-gray-600">Cinematic stories from the heart of Nepal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FILMS.slice(0, 3).map((film) => (
              <div key={film.id} className="group relative overflow-hidden shadow-xl cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  <img src={film.thumbnailUrl} alt={film.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                      <Icons.Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-b-4 border-royal-gold">
                  <span className="text-xs font-bold text-royal-gold uppercase tracking-wider">{film.category}</span>
                  <h3 className="font-serif text-xl text-royal-navy mt-2">{film.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{film.location} • {film.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NavLink to="/films" className="inline-flex items-center text-royal-navy font-bold uppercase tracking-widest border-b-2 border-royal-navy pb-1 hover:text-royal-gold hover:border-royal-gold transition-colors">
              View All Films <Icons.ChevronRight className="ml-2 w-4 h-4" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Signature Style */}
      <section className="py-20 bg-royal-navy text-royal-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center space-y-4">
              <Icons.Heart className="w-12 h-12 text-royal-gold mx-auto" />
              <h3 className="font-serif text-xl">Emotional Storytelling</h3>
              <p className="text-gray-400 text-sm">We focus on raw, unscripted moments that truly matter.</p>
            </div>
            <div className="text-center space-y-4">
              <Icons.Camera className="w-12 h-12 text-royal-gold mx-auto" />
              <h3 className="font-serif text-xl">Cinematic Grade</h3>
              <p className="text-gray-400 text-sm">Royal colors inspired by cinema, not just filters.</p>
            </div>
            <div className="text-center space-y-4">
              <Icons.Video className="w-12 h-12 text-royal-gold mx-auto" />
              <h3 className="font-serif text-xl">Sound Design</h3>
              <p className="text-gray-400 text-sm">High-fidelity audio recording to capture every vow.</p>
            </div>
            <div className="text-center space-y-4">
              <Icons.Star className="w-12 h-12 text-royal-gold mx-auto" />
              <h3 className="font-serif text-xl">Respectful Presence</h3>
              <p className="text-gray-400 text-sm">We document without interrupting the sanctity of rituals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Moments Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-royal-navy">Best Moments</h2>
            <div className="w-24 h-1 bg-royal-gold mx-auto"></div>
          </div>
          
          <div className="columns-1 md:columns-3 gap-4 space-y-4">
            {PHOTOS.slice(0, 6).map((photo) => (
              <div key={photo.id} className="break-inside-avoid relative group overflow-hidden">
                <img src={photo.url} alt={photo.category} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-royal-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-royal-gold font-serif text-xl tracking-wider">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/photography" className="px-8 py-3 bg-royal-navy text-white font-bold uppercase tracking-widest hover:bg-royal-gold hover:text-royal-navy transition-colors">
              Explore Gallery
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-royal-ivory border-t border-royal-navy/5">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-royal-navy mb-16">Kind Words</h2>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="snap-center shrink-0 w-full md:w-[400px] bg-white p-8 shadow-md border-t-4 border-royal-gold">
                <div className="flex justify-center mb-6 text-royal-gold">
                  {[...Array(5)].map((_, i) => <Icons.Star key={i} className="w-5 h-5" />)}
                </div>
                <p className="text-center text-gray-600 italic font-serif leading-relaxed mb-6">"{t.text}"</p>
                <div className="text-center">
                  <h4 className="font-bold text-royal-navy uppercase tracking-wide">{t.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{t.role} • {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-royal-maroon text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-5xl mb-8">Your Story Begins Here</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={getWhatsAppLink()} className="px-8 py-4 bg-royal-gold text-royal-navy font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Chat on WhatsApp
            </a>
            <NavLink to="/contact" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-royal-maroon transition-colors">
              Book a Consultation
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
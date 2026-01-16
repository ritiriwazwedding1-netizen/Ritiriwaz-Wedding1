import React, { useState } from 'react';
import { FILMS, getWhatsAppLink } from '../constants';
import { Icons } from '../components/Icons';

export const Films: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Wedding Film', 'Highlight', 'Teaser', 'Pre-wedding', 'Reels'];

  const filteredFilms = filter === 'All' ? FILMS : FILMS.filter(f => f.category === filter);

  return (
    <div className="bg-royal-ivory min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-royal-navy mb-4">Cinematic Films</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience the love, laughter, and tears through our lenses.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors border ${
                filter === cat 
                  ? 'bg-royal-navy text-royal-gold border-royal-navy' 
                  : 'bg-transparent text-gray-500 border-gray-300 hover:border-royal-navy hover:text-royal-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredFilms.map((film) => (
            <div key={film.id} className="bg-white shadow-lg overflow-hidden group">
              <div className="aspect-video bg-black relative">
                 {/* This would be an iframe in production, using image for demo */}
                 <img src={film.thumbnailUrl} alt={film.title} className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <a href={film.videoUrl} target="_blank" rel="noreferrer" className="w-20 h-20 bg-royal-gold/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-xl">
                      <Icons.Play className="w-8 h-8 text-royal-navy ml-1" />
                    </a>
                 </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-royal-gold text-xs font-bold uppercase tracking-widest">{film.category}</span>
                    <h3 className="font-serif text-2xl text-royal-navy mt-1">{film.title}</h3>
                  </div>
                  <span className="text-gray-400 text-sm">{film.date}</span>
                </div>
                <p className="text-gray-600 mb-6 font-sans leading-relaxed">{film.description}</p>
                <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
                  <span className="flex items-center text-gray-500 text-sm">
                    <Icons.MapPin className="w-4 h-4 mr-2" /> {film.location}
                  </span>
                  <a href={getWhatsAppLink(`I watched '${film.title}' and want a similar style for my wedding.`)} className="text-royal-navy font-bold text-sm uppercase hover:text-royal-gold transition-colors">
                    Book Similar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
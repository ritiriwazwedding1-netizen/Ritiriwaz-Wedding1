import React, { useState } from 'react';
import { PHOTOS } from '../constants';
import { Icons } from '../components/Icons';

export const Photography: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  const categories = ['All', 'Bridal', 'Groom', 'Ceremony', 'Candid', 'Details', 'Family'];
  const filteredPhotos = filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.category === filter);

  return (
    <div className="bg-royal-ivory min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-royal-navy mb-4">Timeless Moments</h1>
          <p className="text-gray-500">Still frames that speak volumes.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 text-sm font-bold uppercase tracking-wider transition-all ${
                filter === cat 
                  ? 'text-royal-navy border-b-2 border-royal-navy' 
                  : 'text-gray-400 hover:text-royal-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="break-inside-avoid relative group cursor-zoom-in overflow-hidden shadow-md bg-gray-200"
              onClick={() => setLightboxPhoto(photo.url)}
            >
              <img 
                src={photo.url} 
                alt={photo.category} 
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${photo.heightClass || 'h-64'}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royal-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-lg tracking-wide">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Lightbox */}
      {lightboxPhoto && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2">
            <Icons.X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxPhoto} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
          />
        </div>
      )}
    </div>
  );
};
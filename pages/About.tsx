import React from 'react';
import { BRAND } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="bg-royal-ivory min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Story */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-royal-navy mb-8">Our Story</h1>
          <div className="prose prose-lg mx-auto text-gray-600 font-sans leading-relaxed">
            <p className="mb-6">
              Founded with a passion for storytelling, <strong>Ritiriwaz Wedding</strong> was born out of a desire to change how weddings are documented in Nepal. We noticed that many focused on how the event looked—the grandeur, the decor, the crowds. But we wanted to focus on how it <em>felt</em>.
            </p>
            <p className="mb-6">
              The tear in a father's eye, the nervous laughter of the groom, the stolen glances. These are the moments that truly make up the fabric of your big day. 
            </p>
            <p>
              In association with <strong>Kaji Production</strong>, we bring technical excellence and cinematic artistry to traditional values. We are not just photographers; we are historians of your family's most important day.
            </p>
          </div>
        </div>

        {/* Gear & Promise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 shadow-sm border-t-2 border-royal-navy">
            <h3 className="font-serif text-xl text-royal-navy mb-3">4K Cinema Line</h3>
            <p className="text-sm text-gray-500">We shoot on Sony Cinema Line cameras to ensure Netflix-quality visuals for your wedding film.</p>
          </div>
          <div className="bg-white p-8 shadow-sm border-t-2 border-royal-navy">
            <h3 className="font-serif text-xl text-royal-navy mb-3">Professional Audio</h3>
            <p className="text-sm text-gray-500">Bad audio ruins good video. We use dedicated recorders and lapel mics for crystal clear vows.</p>
          </div>
          <div className="bg-white p-8 shadow-sm border-t-2 border-royal-navy">
            <h3 className="font-serif text-xl text-royal-navy mb-3">Color Mastery</h3>
            <p className="text-sm text-gray-500">Our signature "Royal" color grade enhances the richness of Nepali wedding attire without looking artificial.</p>
          </div>
        </div>

        <div className="text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest">{BRAND.association}</p>
        </div>
      </div>
    </div>
  );
};
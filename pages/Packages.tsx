import React from 'react';
import { NavLink } from 'react-router-dom';
import { PACKAGES, getWhatsAppLink } from '../constants';
import { Icons } from '../components/Icons';

export const Packages: React.FC = () => {
  return (
    <div className="bg-royal-ivory min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-royal-navy mb-4">Investment</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transparent pricing for priceless memories. Choose a collection that suits your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white p-8 shadow-xl flex flex-col ${
                pkg.isPopular ? 'border-2 border-royal-gold transform md:-translate-y-4' : 'border border-gray-100'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-royal-gold text-royal-navy px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-serif text-2xl text-royal-navy mb-2 text-center">{pkg.name}</h3>
              <div className="text-center mb-8">
                <span className="text-royal-gold font-bold text-lg">{pkg.price}</span>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Icons.Check className="w-5 h-5 text-royal-gold mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={getWhatsAppLink(`I am interested in the ${pkg.name} package.`)}
                className={`w-full py-3 text-center text-sm font-bold uppercase tracking-widest transition-colors ${
                  pkg.isPopular 
                    ? 'bg-royal-navy text-white hover:bg-royal-maroon' 
                    : 'border border-royal-navy text-royal-navy hover:bg-royal-navy hover:text-white'
                }`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>

        {/* Booking Policy & Custom Quote */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-royal-navy text-white p-8">
            <h3 className="font-serif text-2xl mb-4 text-royal-gold">Booking Policy</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>• 30% advance payment required to block dates.</li>
              <li>• 50% payment on the first day of the event.</li>
              <li>• Remaining 20% upon delivery of the first highlight draft.</li>
              <li>• Travel & Stay extra for outside valley.</li>
            </ul>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-lg flex flex-col justify-center items-center text-center">
            <h3 className="font-serif text-2xl text-royal-navy mb-2">Need a Custom Plan?</h3>
            <p className="text-gray-500 text-sm mb-6">We understand every wedding is unique. Let's create a bespoke package for you.</p>
            <NavLink to="/contact" className="px-8 py-3 bg-royal-gold text-royal-navy font-bold uppercase tracking-widest hover:bg-royal-maroon hover:text-white transition-colors">
              Request Custom Quote
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
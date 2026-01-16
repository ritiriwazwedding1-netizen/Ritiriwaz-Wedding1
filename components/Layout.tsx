import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icons } from './Icons';
import { BRAND, getWhatsAppLink } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Films', path: '/films' },
    { name: 'Photography', path: '/photography' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || isOpen ? 'bg-royal-navy shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-royal-gold font-serif text-2xl md:text-3xl font-bold tracking-wide">
          Ritiriwaz
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-widest uppercase transition-colors duration-300 hover:text-royal-gold ${
                  isActive ? 'text-royal-gold font-bold' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-navy transition-all uppercase text-xs font-bold tracking-widest"
          >
            Check Availability
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-royal-gold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-royal-navy border-t border-white/10 flex flex-col items-center py-6 space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-white text-lg tracking-widest uppercase hover:text-royal-gold"
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={getWhatsAppLink()}
            className="px-8 py-3 bg-royal-gold text-royal-navy font-bold uppercase text-sm tracking-widest"
          >
            Check Availability
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-navy text-royal-ivory pt-20 pb-10 border-t-4 border-royal-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-royal-gold font-bold">Ritiriwaz</h2>
            <p className="text-gray-300 font-sans text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {BRAND.tagline}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-royal-gold hover:text-white transition-colors">
                <Icons.Instagram />
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-royal-gold hover:text-white transition-colors">
                <Icons.Phone />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-royal-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><NavLink to="/films" className="hover:text-royal-gold transition-colors">Films</NavLink></li>
              <li><NavLink to="/photography" className="hover:text-royal-gold transition-colors">Photography</NavLink></li>
              <li><NavLink to="/packages" className="hover:text-royal-gold transition-colors">Packages</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-royal-gold transition-colors">Book Now</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-royal-gold">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300 flex flex-col items-center md:items-start">
              <a href={`tel:${BRAND.phone1}`} className="hover:text-royal-gold block">{BRAND.phone1}</a>
              <a href={`tel:${BRAND.phone2}`} className="hover:text-royal-gold block">{BRAND.phone2}</a>
              <a href={`mailto:${BRAND.email}`} className="hover:text-royal-gold block">{BRAND.email}</a>
              <p className="pt-2">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="mt-2 opacity-60">{BRAND.association}</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <Icons.Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
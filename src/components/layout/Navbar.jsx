import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, Globe, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, changeLanguage, getWhatsAppUrl } = useLanguage();

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navProducts'), path: '/products' },
    { name: t('navCustom'), path: '/custom-printing' },
    { name: t('navAbout'), path: '/about' },
    { name: t('navContact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-morphism shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 gap-4">
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
              <span className="text-xl font-bold text-brand-green-dark leading-tight hidden xl:block">
                Sri Lakshmi Priya<br/>
                <span className="text-sm font-semibold tracking-wider uppercase text-brand-green">Screen Print</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="nav-link text-sm xl:text-base whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={() => changeLanguage(language === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-2 bg-brand-cream border border-brand-green/20 px-3 py-1.5 rounded-full text-brand-green-dark font-bold text-xs xl:text-sm hover:border-brand-green transition-all whitespace-nowrap"
            >
              <Globe size={16} />
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>

            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-green-dark transition-all duration-300 shadow-md whitespace-nowrap text-sm xl:text-base flex items-center gap-2"
            >
              <MessageCircle size={18} />
              {t('orderWhatsApp')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => changeLanguage(language === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1 bg-brand-cream border border-brand-green/20 px-2.5 py-1.5 rounded-full text-brand-green-dark font-bold text-xs"
            >
              <Globe size={14} />
              {language === 'en' ? 'தமிழ்' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-green-dark hover:text-brand-green focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-brand-green/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-base font-medium text-brand-green-dark hover:bg-brand-cream hover:text-brand-green rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-4 text-base font-bold text-brand-green bg-brand-cream rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {t('orderWhatsApp')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

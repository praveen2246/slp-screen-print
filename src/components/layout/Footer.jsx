import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-green-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="text-brand-yellow w-8 h-8" />
              <span className="text-xl font-bold">Sri Lakshmi Priya</span>
            </div>
            <p className="text-brand-cream/80 leading-relaxed">
              {t('manufacturingDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-yellow">{t('quickLinks')}</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-brand-cream/80 hover:text-brand-yellow transition-colors">{t('navHome')}</Link></li>
              <li><Link to="/products" className="text-brand-cream/80 hover:text-brand-yellow transition-colors">{t('navProducts')}</Link></li>
              <li><Link to="/custom-printing" className="text-brand-cream/80 hover:text-brand-yellow transition-colors">{t('navCustom')}</Link></li>
              <li><Link to="/about" className="text-brand-cream/80 hover:text-brand-yellow transition-colors">{t('navAbout')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-yellow">{t('navContact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-yellow w-5 h-5 shrink-0" />
                <span className="text-brand-cream/80 text-sm">
                  23/12 Solaialagupuram 2nd Street, <br />
                  Madurai - 625011<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-yellow w-5 h-5 shrink-0" />
                <span className="text-brand-cream/80">+91 8778601323</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-yellow w-5 h-5 shrink-0" />
                <span className="text-brand-cream/80">tbpraveen23@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-yellow">{t('businessHours')}</h3>
            <ul className="space-y-2 text-brand-cream/80">
              <li className="flex justify-between"><span>{t('monSun')}:</span> <span>9:00 AM - 8:00 PM</span></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <a 
                href="https://wa.me/8778601323" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-yellow hover:text-white transition-colors font-semibold"
              >
                <MessageCircle size={20} />
                {t('chatWhatsApp')}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-brand-cream/60 text-sm">
          <p>© {new Date().getFullYear()} Sri Lakshmi Priya Screen Print. {t('rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

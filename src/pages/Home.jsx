import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/layout/SEO';

const Home = () => {
  const { t, language, getWhatsAppUrl, phoneNumber } = useLanguage();

  return (
    <div className="overflow-hidden">
      <SEO
        title={t('seoHomeTitle')}
        description={t('seoHomeDesc')}
        keywords={t('seoHomeKeywords')}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-cream pt-20 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green-dark px-4 py-2 rounded-full font-bold text-sm">
                <Leaf size={16} />
                <span>{t('ecoBenefit')}</span>
              </div>

              <h1 className={`text-5xl md:text-7xl font-extrabold ${language === 'ta' ? 'leading-[1.3]' : 'leading-tight'}`}>
                {t('heroTitle').split('&').map((part, i) => (
                  <React.Fragment key={i}>
                    {i === 0 ? part : <><br /><span className="text-brand-green">&</span>{part}</>}
                  </React.Fragment>
                ))}
              </h1>

              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                {t('heroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-green transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {t('callNow')}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={20} />
                  {t('chatWhatsApp')}
                </a>
                <Link
                  to="/products"
                  className="bg-white text-brand-green-dark font-bold py-3 px-8 rounded-full border-2 border-brand-green/20 hover:border-brand-green transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t('viewProducts')}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-brand-yellow/20 rounded-3xl rotate-3 scale-105 blur-sm"></div>
              <img
                src="/assets/bag_gopi.jpeg"
                alt="Eco-friendly Manja Pai"
                className="relative rounded-3xl shadow-2xl border-4 border-white w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-green/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-yellow p-3 rounded-full">
                    <ShieldCheck className="text-brand-green-dark" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-green-dark">Trusted Quality</p>
                    <p className="text-sm text-gray-500">20+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">{t('whyChoose')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('benefitsSubtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-brand-green" />,
              title: t('ecoFriendly'),
              desc: t('ecoFriendlyDesc')
            },
            {
              icon: <Zap className="w-10 h-10 text-brand-yellow" />,
              title: t('durable'),
              desc: t('durableDesc')
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-brand-green-dark" />,
              title: t('customPrinting'),
              desc: t('customPrintingDesc')
            }
          ].map((benefit, index) => (
            <div key={index} className="p-8 rounded-3xl bg-brand-cream border border-brand-green/5 hover:border-brand-green/20 hover:shadow-lg transition-all duration-300 text-center md:text-left">
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="/assets/products_grid.png" alt="Background pattern" loading="lazy" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl text-white mb-8">{t('readySwitch')}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-green-dark font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              {t('requestSample')}
            </a>
            <Link
              to="/contact"
              className="bg-white/10 text-white border-2 border-white/20 backdrop-blur-sm font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-brand-green-dark transition-all"
            >
              {t('contactSales')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

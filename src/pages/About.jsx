import React from 'react';
import { Leaf, Award, Users, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">{t('aboutTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="text-3xl font-bold">{t('traditionalValues')}</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <p className="text-4xl font-extrabold text-brand-green">20+</p>
                <p className="font-bold text-gray-500 uppercase tracking-widest text-xs">{t('yearsExp')}</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-extrabold text-brand-green">500k+</p>
                <p className="font-bold text-gray-500 uppercase tracking-widest text-xs">{t('bagsProduced')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-brand-green/10 rounded-3xl -rotate-6"></div>
            <img 
              src="/assets/products_grid.png" 
              alt="Our Workshop" 
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">{t('coreValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-brand-green" />,
                title: t('sustainability'),
                desc: t('sustainabilityDesc')
              },
              {
                icon: <Award className="w-10 h-10 text-brand-yellow" />,
                title: t('quality'),
                desc: t('qualityDesc')
              },
              {
                icon: <Users className="w-10 h-10 text-brand-green-dark" />,
                title: t('community'),
                desc: t('communityDesc')
              },
              {
                icon: <Heart className="w-10 h-10 text-red-400" />,
                title: t('tradRoots'),
                desc: t('tradRootsDesc')
              }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Palette, Printer, CheckCircle2, Image as ImageIcon, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CustomPrinting = () => {
  const { t, getWhatsAppUrl } = useLanguage();

  const steps = [
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: t('step1Title'),
      desc: t('step1Desc')
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t('step2Title'),
      desc: t('step2Desc')
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: t('step3Title'),
      desc: t('step3Desc')
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: t('step4Title'),
      desc: t('step4Desc')
    }
  ];

  const examples = [
    { title: "Retail Shop Logo", desc: "Perfect for supermarkets and clothing stores." },
    { title: "Wedding Invitations", desc: "Traditional thamboolam bags with gold printing." },
    { title: "Event Branding", desc: "Promotional bags for conferences and expos." },
    { title: "Custom Quotes", desc: "Personalized bags for gifting or social causes." }
  ];

  return (
    <div className="bg-white py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t('printingTitle')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t('printingSubtitle')}
        </p>
      </div>

      {/* Main Feature */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <img 
            src="/assets/printing_demo.png" 
            alt="Screen Printing Process" 
            className="rounded-3xl shadow-2xl border-8 border-brand-cream w-full object-cover h-[500px]"
          />
        </div>
        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <h2 className="text-3xl font-bold">{t('printingProcess')}</h2>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="bg-brand-yellow/20 p-4 rounded-2xl text-brand-green-dark h-fit">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="bg-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('popularApps')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examples.map((ex, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-brand-green-dark">{ex.title}</h3>
                <p className="text-gray-600">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div className="bg-brand-green-dark p-12 rounded-[40px] text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">{t('gotDesign')}</h2>
          <p className="text-brand-cream/80 text-lg mb-8">
            {t('designCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+918778601323"
              className="bg-white text-brand-green-dark font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              {t('callNow')}
            </a>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-green-dark font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              {t('startProject')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPrinting;

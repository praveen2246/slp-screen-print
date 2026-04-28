import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div className="fixed inset-0 z-[90] bg-brand-cream flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-brand-green/10">
        <div className="mx-auto w-20 h-20 bg-brand-yellow/20 rounded-3xl flex items-center justify-center mb-8">
          <Globe className="text-brand-green-dark w-10 h-10" />
        </div>
        
        <h2 className="text-3xl font-bold text-brand-green-dark mb-4">Choose Language</h2>
        <h3 className="text-xl font-semibold text-brand-green mb-10">மொழியைத் தேர்ந்தெடுக்கவும்</h3>
        
        <div className="space-y-6">
          <button
            onClick={() => changeLanguage('en')}
            className="w-full py-5 bg-brand-green-dark text-white rounded-2xl text-xl font-bold hover:bg-brand-green hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            English
          </button>
          
          <button
            onClick={() => changeLanguage('ta')}
            className="w-full py-5 bg-brand-yellow text-brand-green-dark rounded-2xl text-xl font-bold hover:bg-brand-green hover:text-white hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            தமிழ் (Tamil)
          </button>
        </div>
        
        <p className="mt-12 text-gray-400 text-sm font-medium">
          You can change this later in settings.
        </p>
      </div>
    </div>
  );
};

export default LanguageSelector;

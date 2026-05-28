import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('appLanguage');
    console.log('Detected Language:', savedLang);
    return savedLang || null;
  });

  const [showSplash, setShowSplash] = useState(() => {
    const savedLang = localStorage.getItem('appLanguage');
    const skip = savedLang !== null;
    console.log('Should Skip Splash:', skip);
    return !skip;
  });

  useEffect(() => {
    if (language) {
      console.log('Saving Language to Storage:', language);
      localStorage.setItem('appLanguage', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const t = (key) => {
    const lang = language || 'en';
    return translations[lang][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const getWhatsAppUrl = () => {
    const message = t('waMessage');
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      showSplash,
      setShowSplash,
      getWhatsAppUrl,
      phoneNumber,
      whatsappNumber
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

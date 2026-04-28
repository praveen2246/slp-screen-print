import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WhatsAppButton = () => {
  const { t, getWhatsAppUrl } = useLanguage();

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center"
      aria-label="Contact on WhatsApp"
    >
      <div className="bg-white text-brand-green-dark px-4 py-2 rounded-full mr-3 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 font-bold border border-brand-green/10">
        {t('chatWhatsApp')}
      </div>
      <div className="bg-brand-green text-white p-4 rounded-full shadow-2xl hover:bg-brand-green-dark transition-all duration-300 animate-bounce hover:animate-none group-hover:scale-110 active:scale-95 border-4 border-white">
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;

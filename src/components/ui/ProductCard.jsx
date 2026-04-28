import React from 'react';
import { MessageCircle, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ProductCard = ({ image, title, size, price, description }) => {
  const { t } = useLanguage();
  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in the ${title} (Size: ${size}). Can you provide more details?`);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-brand-green/5">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 p-3 rounded-full text-brand-green-dark scale-50 group-hover:scale-100 transition-transform duration-500">
            <Maximize2 size={24} />
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">{title}</h3>
          <span className="bg-brand-yellow/20 text-brand-green-dark text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            {size}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-bold uppercase">{t('price')}</span>
            <span className="text-2xl font-bold text-brand-green">₹{price}</span>
          </div>
          <a 
            href={`https://wa.me/8778601323?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
          >
            <MessageCircle size={18} />
            {t('inquireNow')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

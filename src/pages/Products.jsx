import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/layout/SEO';

const Products = () => {
  const { t, getWhatsAppUrl, phoneNumber } = useLanguage();

  const products = [
    {
      title: t('prod1Title'),
      image: "/assets/bag_wedding.jpeg",
      description: t('prod1Desc')
    },
    {
      title: t('prod2Title'),
      image: "/assets/bag_gopi.jpeg",
      description: t('prod2Desc')
    },
    {
      title: t('prod3Title'),
      image: "/assets/bag_muthu.jpeg",
      description: t('prod3Desc')
    },
    {
      title: t('prod4Title'),
      image: "/assets/bag_thai.jpeg",
      description: t('prod4Desc')
    },
    {
      title: t('prod5Title'),
      image: "/assets/bag_nayagar.jpeg",
      description: t('prod5Desc')
    },
    {
      title: t('prod6Title'),
      image: "/assets/bag_wedding.jpeg",
      description: t('prod6Desc')
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen py-24">
      <SEO
        title={t('seoProductsTitle')}
        description={t('seoProductsDesc')}
        keywords={t('seoProductsKeywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t('ourCollection')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('collectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Custom Order Banner */}
        <div className="mt-20 bg-brand-yellow rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4 text-brand-green-dark">{t('needCustomSize')}</h2>
            <p className="text-brand-green-dark/80 text-lg">
              {t('customSizeDesc')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:+91${phoneNumber}`}
              className="whitespace-nowrap bg-white text-brand-green-dark font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {t('callNow')}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-brand-green-dark text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {t('inquireNow')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

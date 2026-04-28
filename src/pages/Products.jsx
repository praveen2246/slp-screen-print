import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
  const { t, getWhatsAppUrl } = useLanguage();

  const products = [
    {
      title: "Small Manja Pai",
      size: "8\" x 10\"",
      price: "15",
      image: "/assets/products_grid.png",
      description: "Ideal for return gifts, wedding thamboolam, and small retail items. Durable and lightweight."
    },
    {
      title: "Medium Shopping Bag",
      size: "12\" x 15\"",
      price: "25",
      image: "/assets/hero_bags.png",
      description: "Standard grocery size. Perfect for supermarkets, clothing stores, and daily use."
    },
    {
      title: "Large Exhibition Bag",
      size: "16\" x 20\"",
      price: "45",
      image: "/assets/products_grid.png",
      description: "Heavy-duty cloth bag for large items, exhibitions, and corporate gift hampers."
    },
    {
      title: "Premium Wedding Bag",
      size: "14\" x 16\"",
      price: "60",
      image: "/assets/hero_bags.png",
      description: "Double-stitched premium cotton with gold-tinted handles. Perfect for special occasions."
    },
    {
      title: "Bottle Carrier Bag",
      size: "6\" x 14\"",
      price: "20",
      image: "/assets/products_grid.png",
      description: "Specially designed for wine bottles or long containers. Strong reinforced base."
    },
    {
      title: "Tote Style Manja Pai",
      size: "15\" x 15\"",
      price: "35",
      image: "/assets/hero_bags.png",
      description: "Modern tote style with wide handles. Comfortable for carrying long distances."
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen py-24">
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
              href="tel:+918778601323"
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

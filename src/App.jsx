import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import SplashScreen from './components/entry/SplashScreen';
import LanguageSelector from './components/entry/LanguageSelector';
import Home from './pages/Home';
import Products from './pages/Products';
import CustomPrinting from './pages/CustomPrinting';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const { language, showSplash, setShowSplash } = useLanguage();

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (!language) {
    return <LanguageSelector />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen animate-in fade-in duration-700">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/custom-printing" element={<CustomPrinting />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const SplashScreen = ({ onFinish }) => {
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade('fade-out');
      setTimeout(onFinish, 500); // Wait for fade-out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[100] bg-brand-cream flex flex-col items-center justify-center transition-opacity duration-500 ${fade === 'fade-out' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="p-4 animate-bounce">
        <img src="/assets/logo.png" alt="Sri Lakshmi Priya Logo" className="w-32 h-32 object-contain" />
      </div>
      <h1 className="mt-8 text-3xl font-extrabold text-brand-green-dark tracking-tight text-center">
        Sri Lakshmi Priya<br/>
        <span className="text-xl font-semibold text-brand-green uppercase tracking-widest">Screen Print</span>
      </h1>
    </div>
  );
};

export default SplashScreen;

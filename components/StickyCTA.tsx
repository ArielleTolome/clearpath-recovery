import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { AFFILIATE_LINK, AFFILIATE_CTA_TEXT } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a 
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 w-full bg-brand-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-brand-700 active:scale-95 transition-all"
      >
        <Download className="h-5 w-5" />
        <span>{AFFILIATE_CTA_TEXT}</span>
      </a>
    </div>
  );
};

export default StickyCTA;
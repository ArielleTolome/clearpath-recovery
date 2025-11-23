import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 pb-24 md:pb-12"> {/* Extra padding bottom for mobile sticky CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="h-8 w-8 text-brand-500" />
              <span className="font-bold text-xl text-white tracking-tight">{APP_NAME}</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm">
              Helping men reclaim their focus, motivation, and relationships through science-backed recovery strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Articles</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-500 cursor-not-allowed">Privacy Policy</span></li>
              <li><span className="text-slate-500 cursor-not-allowed">Terms of Service</span></li>
              <li><span className="text-slate-500 cursor-not-allowed">Affiliate Disclosure</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-center text-slate-500">
          <p className="mb-2">
            Disclaimer: The content on this website is for informational purposes only and does not constitute medical advice.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
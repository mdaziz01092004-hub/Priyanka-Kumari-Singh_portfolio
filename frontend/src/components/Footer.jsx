import { Link } from 'react-router-dom';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-literary-900 text-literary-100 py-12 relative border-t border-literary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center sm:text-left">
            <Link to="/" className="block font-serif font-bold text-xl tracking-wide text-white mb-1 hover:text-literary-300 transition-colors">
              Priyanka Kumari Singh<span className="text-literary-400">.</span>
            </Link>
            <p className="text-xs text-literary-300">
              B.A. English Student | Exploring Literature & Professional Opportunities
            </p>
          </div>

          {/* Copyright & Made with Heart */}
          <div className="flex flex-col items-center sm:items-end gap-2 text-xs text-literary-300">
            <div>
              &copy; {new Date().getFullYear()} Priyanka Kumari Singh. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for Academic & Career Growth
            </div>
          </div>

        </div>

        {/* Back to top floating accent button */}
        <div className="absolute right-6 -top-5 sm:right-12 sm:-top-6">
          <button
            onClick={scrollToTop}
            type="button"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-literary-500 hover:bg-literary-400 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-literary-500"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

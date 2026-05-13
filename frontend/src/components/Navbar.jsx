import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About & Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-literary-50/90 backdrop-blur-md shadow-sm border-b border-literary-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 text-ink hover:opacity-80 transition-opacity"
          >
            <BookOpen className="w-6 h-6 text-literary-600" />
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide">
              Priyanka<span className="text-literary-500 text-3xl leading-none">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-ink-muted hover:text-literary-600 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-literary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-literary-600 text-literary-50 hover:bg-literary-700 transition-all duration-300 shadow-sm hover:shadow"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-ink hover:text-literary-600 focus:outline-none p-2 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-literary-50/95 backdrop-blur-lg border-b border-literary-200/50 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 py-4 shadow-lg' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-3 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-base font-medium text-ink hover:text-literary-600 transition-colors py-2 border-b border-literary-100 last:border-none"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

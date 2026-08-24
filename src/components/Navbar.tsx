import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, CalendarDays } from 'lucide-react';
import { BRAND_NAME_ZH, BRAND_NAME_EN, ASSETS } from '../data';

interface NavbarProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  onScrollTo: (elementId: string) => void;
  onOpenReservation: () => void;
}

export default function Navbar({ lang, setLang, onScrollTo, onOpenReservation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', zh: '首頁', en: 'Home' },
    { id: 'menu', zh: '精選茶食', en: 'Menu' },
    { id: 'philosophy', zh: '理念與空間', en: 'Philosophy & Space' },
    { id: 'reviews', zh: '真實反饋', en: 'Reviews' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-brand-border/80 py-3 shadow-xs'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Brand Title */}
          <div 
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brand-border bg-white flex items-center justify-center p-0.5 transition-transform duration-500 group-hover:rotate-12">
              <img
                src={ASSETS.logo}
                alt="RUO TEA Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-brand-dark transition-colors duration-300 group-hover:text-brand-blue-dark">
                {lang === 'zh' ? 'RUO TEA' : 'RUO TEA'}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-blue-dark font-medium -mt-1">
                {lang === 'zh' ? '植物茶間' : 'PLANT-BASED HOUSE'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="font-sans text-sm font-medium tracking-wide text-brand-dark/80 hover:text-brand-blue-dark transition-colors duration-200 relative py-1 group cursor-pointer"
              >
                {lang === 'zh' ? link.zh : link.en}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blue-dark transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA & Language Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] border border-brand-border hover:border-brand-blue hover:bg-brand-cream-dark transition-all duration-200 text-xs font-mono tracking-wide text-brand-dark-light cursor-pointer"
              title="切換語言 / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-blue-dark" />
              <span>{lang === 'zh' ? 'EN' : '繁中'}</span>
            </button>

            {/* Book table CTA button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs uppercase tracking-widest font-mono font-semibold rounded-[20px] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '預約席次' : 'Book Table'}</span>
            </button>
          </div>

          {/* Mobile menu and language controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Book Table Button directly on mobile header */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-mono font-semibold rounded-[20px] transition-all duration-300 shadow-xs cursor-pointer"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '預約' : 'Book'}</span>
            </button>

            {/* Language switch on mobile (compact) */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="p-1.5 rounded-[20px] border border-brand-border text-xs font-mono text-brand-dark cursor-pointer flex items-center justify-center h-8 px-2.5"
            >
              {lang === 'zh' ? 'EN' : '繁中'}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-brand-dark border border-brand-border rounded-[20px] hover:bg-brand-cream-dark transition-all duration-200 cursor-pointer h-8 w-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF9F5] border-b border-brand-border/60 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="block w-full text-left py-2 px-3 text-base font-medium text-brand-dark/90 hover:bg-brand-cream-dark hover:text-brand-blue-dark transition-all duration-200 border-l border-transparent hover:border-brand-blue-dark cursor-pointer"
                >
                  {lang === 'zh' ? link.zh : link.en}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

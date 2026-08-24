import { motion } from 'motion/react';
import { ChevronDown, Sparkles, MapPin, Compass } from 'lucide-react';
import { BRAND_TAGLINE_ZH, BRAND_TAGLINE_EN, RESTAURANT_INFO, ASSETS } from '../data';

interface HeroProps {
  lang: 'zh' | 'en';
  onScrollTo: (elementId: string) => void;
  onOpenReservation: () => void;
}

export default function Hero({ lang, onScrollTo, onOpenReservation }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 flex flex-col justify-between border-b border-brand-border/60">
      {/* Decorative vertical lines mimicking high-end Framer templates */}
      <div className="absolute inset-y-0 left-10 md:left-24 w-[1px] bg-brand-border/30 -z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-10 md:right-24 w-[1px] bg-brand-border/30 -z-10 pointer-events-none" />

      {/* Main Content Area: A grid system */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Editorial text Column (7 columns on large screen) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-8">
          
          {/* Subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-dark rounded-full text-xs font-mono tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '檳城絕美禪風植感茶館' : 'Zen Plant-Based Sanctuary in Penang'}</span>
          </motion.div>

          {/* Main Title paired elegantly */}
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xs uppercase font-mono tracking-widest text-brand-clay font-semibold"
            >
              {lang === 'zh' ? '季節蔬食・手沏好茶・靜享日常' : 'SEASONAL VEGAN • ARTISANAL TEA • MINDFUL LIVING'}
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-brand-dark tracking-tight leading-[1.1]"
            >
              RUO TEA <br />
              <span className="text-brand-blue-dark font-normal italic serif-italic">植物茶間</span>
            </motion.h1>
          </div>

          {/* Tagline & short description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 max-w-xl"
          >
            <p className="text-lg md:text-xl font-medium text-brand-dark/90 tracking-wide font-sans leading-relaxed">
              {lang === 'zh' ? BRAND_TAGLINE_ZH : BRAND_TAGLINE_EN}
            </p>
            <p className="text-sm md:text-base text-brand-dark-light/80 leading-relaxed whitespace-pre-line">
              {lang === 'zh' ? (
                <>
                  學習水的品質、敬畏水的生命，做上善之人，行上善之事。
                  <br />
                  結合珍稀植本養膳與功夫茶藝，為您呈現寧靜淡雅的極致蔬食茶宴。
                </>
              ) : (
                '“Embrace the highest form of virtue, like water; Bestow good upon all, yet seek no credits. Drawing wisdom from the water, respecting its way, We embrace kindness, instill compassion and gentleness in us, and in our community.”'
              )}
            </p>
          </motion.div>

          {/* Call to Actions with exact Framer styles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs uppercase tracking-widest font-mono font-semibold rounded-[20px] transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
            >
              {lang === 'zh' ? '預約今日席次' : 'Reserve a Table'}
            </button>
            <button
              onClick={() => onScrollTo('menu')}
              className="px-8 py-3.5 bg-transparent hover:bg-brand-dark hover:text-white text-brand-dark border border-brand-dark text-xs uppercase tracking-widest font-mono font-semibold rounded-[20px] transition-all duration-300 cursor-pointer"
            >
              {lang === 'zh' ? '探索精緻菜單' : 'Explore the Menu'}
            </button>
          </motion.div>

          {/* Quick info snippets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-border/40 text-xs font-mono text-brand-dark-light/70"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-blue-dark" />
              <span>{lang === 'zh' ? '座落於喬治市 Persiaran Midlands' : 'Located at Persiaran Midlands, George Town'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-blue-dark" />
              <span>{lang === 'zh' ? '席次有限・建議提早預訂' : 'Limited Seats • Booking Advised'}</span>
            </div>
          </motion.div>

        </div>

        {/* Right Large Image Column (5 columns on large screen) */}
        <div className="lg:col-span-5 relative w-full aspect-square md:aspect-video lg:aspect-[4/5] flex items-center justify-center">
          
          {/* Framer style thin framing borders around image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full p-3 bg-white border border-brand-border/80 shadow-md relative group overflow-hidden rounded-[20px]"
          >
            {/* The main background Zen interior picture */}
            <img
              src={ASSETS.zenInterior}
              alt="Ruo Tea Zen Interior Environment"
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant overlay card containing small details of RUO TEA interior */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#FAF9F5]/90 backdrop-blur-md p-4 border border-brand-border/80 rounded-[20px] flex items-center justify-between shadow-md">
              <div className="space-y-0.5">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-brand-clay font-semibold">
                  {lang === 'zh' ? 'RUO TEA · 特色功夫茶席' : 'RUO TEA · KUNG FU TEA EXPERIENCE'}
                </span>
                <span className="block font-serif font-bold text-sm text-brand-dark">
                  {lang === 'zh' ? '「水善利萬物而不爭」' : '“The highest excellence is like that of water”'}
                </span>
              </div>
              <span className="text-[10px] font-mono bg-brand-blue/20 text-brand-blue-dark px-2.5 py-1 rounded-[20px] border border-brand-blue/10">
                {lang === 'zh' ? '榻榻米雅座' : 'Tatami Seating'}
              </span>
            </div>
          </motion.div>

          {/* Decorative small round logo floating on the side */}
          <motion.div
            initial={{ opacity: 0, rotate: -45, x: 20 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-brand-cream-dark border border-brand-border rounded-full p-2 shadow-lg hidden sm:flex items-center justify-center pointer-events-none"
          >
            <img
              src={ASSETS.logo}
              alt="Brand stamp"
              className="w-full h-full object-contain rounded-full opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

      </div>

    </section>
  );
}

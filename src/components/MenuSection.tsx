import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Sparkles, Tag, Info, ShoppingBag, CalendarDays, BookOpen, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import FullMenuModal from './FullMenuModal';

interface MenuSectionProps {
  lang: 'zh' | 'en';
  onBookClick: () => void;
}

export default function MenuSection({ lang, onBookClick }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'claypot' | 'dimsum' | 'tea'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState<boolean>(false);

  const categories = [
    { id: 'all', zh: '全部茶食', en: 'All Items' },
    { id: 'claypot', zh: '招牌溫火煲湯', en: 'Signature Claypots' },
    { id: 'dimsum', zh: '精緻手作茶食', en: 'Fine Dim Sum' },
    { id: 'tea', zh: '古法老陶手沏', en: 'Artisanal Teas' }
  ];

  const topBadges = [
    { zh: '招牌必點 TOP 1', en: 'SIGNATURE TOP 1' },
    { zh: '極致香氣 TOP 2', en: 'RICH AROMA TOP 2' },
    { zh: '經典小點 TOP3', en: 'CLASSIC BITES TOP 3' }
  ];

  const filteredItems = (activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory)).slice(0, 3);

  return (
    <section id="menu" className="py-20 bg-brand-cream/40 relative overflow-hidden border-b border-brand-border/60">
      <div className="absolute inset-y-0 left-10 md:left-24 w-[1px] bg-brand-border/30 -z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-10 md:right-24 w-[1px] bg-brand-border/30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono tracking-widest text-brand-clay uppercase font-semibold block">
            {lang === 'zh' ? 'SIGNATURE SELECTIONS • 樂以若膳' : 'SIGNATURE SELECTIONS • MINDFUL GASTRONOMY'}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-brand-dark">
            {lang === 'zh' ? 'TOP 3 招牌必點蔬食與茶飲' : 'Top 3 Signature Dishes & Tea'}
          </h2>
          <p className="text-sm text-brand-dark-light/80 leading-relaxed font-sans">
            {lang === 'zh'
              ? '從滋補珍稀煲湯、黑松露拌飯到精緻冷萃茶，嚴選最受顧客喜愛的五大招牌。'
              : 'From nourishing herbal broths and black truffle rice to artisanal cold brew tea, curated favorites loved by our guests.'}
          </p>
        </div>


        {/* Grid of Menu Items */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-brand-border/80 p-3 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group rounded-[20px]"
              >
                <div>
                  {/* Item Image with hover expand */}
                  <div className="aspect-square relative overflow-hidden bg-brand-cream border border-brand-border/40 mb-4 rounded-[20px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-[20px]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Corner Tag - Top Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold rounded-full shadow-md tracking-wider">
                      <svg
                        className="w-3.5 h-3.5 text-white shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                        <circle cx="4.5" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                      <span>
                        {topBadges[index]
                          ? (lang === 'zh' ? topBadges[index].zh : topBadges[index].en)
                          : (lang === 'zh' ? item.tags[0] : item.tags[0])}
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-0.5">
                        <h3 className="font-serif font-bold text-lg text-brand-dark tracking-wide flex items-center gap-1.5">
                          {item.name}
                          {item.id === 'claypot-1' && <Leaf className="w-3.5 h-3.5 text-brand-blue-dark" />}
                        </h3>
                        <span className="block text-[11px] font-mono text-brand-clay font-semibold tracking-wider uppercase">
                          {item.englishName}
                        </span>
                      </div>
                      <span className="font-mono text-base font-semibold text-brand-blue-dark shrink-0">
                        RM {typeof item.price === 'number' && item.price % 1 !== 0 ? item.price.toFixed(2) : item.price}
                      </span>
                    </div>

                    <p className="text-xs text-brand-dark-light/80 leading-relaxed font-sans line-clamp-3 pt-1 border-t border-brand-border/40">
                      {lang === 'zh' ? item.description : item.englishDescription}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-4 mt-4 border-t border-brand-border/40 flex items-center justify-between">
                  {/* Miniature tags */}
                  <div className="flex flex-wrap gap-1 max-w-[210px]">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono bg-brand-cream px-1.5 py-0.5 text-brand-dark-light/70 border border-brand-border/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Direct Reservation Form Button */}
                  <button
                    onClick={onBookClick}
                    className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-brand-blue hover:bg-brand-blue-dark transition-all duration-200 cursor-pointer py-1.5 px-3 rounded-[20px] shadow-xs hover:shadow-sm"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{lang === 'zh' ? '預約席位' : 'Reserve'}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Menu Button Callout after 3 Signature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 p-3 sm:p-4 bg-white border border-brand-border/80 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 max-w-2xl w-full">
            <div className="flex items-center gap-3.5 text-left px-2">
              <div className="w-11 h-11 rounded-xl bg-brand-cream border border-brand-border/60 flex items-center justify-center text-brand-blue-dark shrink-0">
                <UtensilsCrossed className="w-5 h-5 text-brand-blue-dark" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-brand-dark">
                  {lang === 'zh' ? '若水植物茶間 • 完整全菜單 Menu' : 'RUO TEA Complete Menu & Beverages'}
                </p>
                <p className="text-xs text-brand-dark-light/75 font-sans mt-0.5">
                  {lang === 'zh' 
                    ? '瀏覽養膳煲湯、主食套飯、麵線系列、功夫特調茶飲、手工點心與甜點' 
                    : 'Browse nourishing hotpots, set rice, vermicelli, craft teas & dim sum'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsFullMenuOpen(true)}
              className="w-full sm:w-auto px-7 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-mono uppercase tracking-widest font-semibold rounded-[20px] transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'zh' ? '查看完整菜單 (Full Menu)' : 'View Full Menu'}</span>
            </button>
          </div>
        </motion.div>

        {/* Full Menu Modal (Styled matching reference fullmenubutton.png) */}
        <FullMenuModal
          isOpen={isFullMenuOpen}
          onClose={() => setIsFullMenuOpen(false)}
          onBookClick={onBookClick}
          lang={lang}
        />

        {/* Detailed Modal/Drawer overlay */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-black"
              />
              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-[#FAF9F5] border border-brand-border max-w-2xl w-full p-6 md:p-8 shadow-2xl relative overflow-y-auto max-h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-6 rounded-[20px]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-brand-border bg-white text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-200 cursor-pointer rounded-[20px]"
                >
                  ✕
                </button>

                {/* Left col: Image */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="aspect-square border border-brand-border bg-white p-2 rounded-[20px] overflow-hidden">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover rounded-[20px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Right col: Details */}
                <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-dark px-2 py-0.5 rounded-none inline-block">
                        {lang === 'zh' ? '植物茶食系列' : 'PLANT-BASED ESSENCE'}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-brand-dark">
                        {selectedItem.name}
                      </h3>
                      <span className="block text-xs font-mono text-brand-clay font-bold tracking-wider uppercase">
                        {selectedItem.englishName}
                      </span>
                    </div>

                    <div className="text-xl font-mono font-semibold text-brand-blue-dark">
                      RM {typeof selectedItem.price === 'number' && selectedItem.price % 1 !== 0 ? selectedItem.price.toFixed(2) : selectedItem.price}
                    </div>

                    <p className="text-xs text-brand-dark-light/90 leading-relaxed pt-3 border-t border-brand-border/60 font-sans">
                      {lang === 'zh' ? selectedItem.description : selectedItem.englishDescription}
                    </p>

                    {/* Detailed features of item */}
                    <div className="pt-3 border-t border-brand-border/40 space-y-2">
                      <span className="block text-[10px] font-mono text-brand-clay font-semibold tracking-wider uppercase">
                        {lang === 'zh' ? '食材與特性' : 'INGREDIENTS & HIGHLIGHTS'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItem.tags.map((tag, idx) => (
                          <span key={idx} className="text-[9px] font-mono bg-white border border-brand-border px-2.5 py-1 text-brand-dark-light/80">
                            ✓ {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-border/40 flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        onBookClick();
                      }}
                      className="flex-1 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs uppercase tracking-widest font-mono font-semibold rounded-[20px] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{lang === 'zh' ? '預訂品嚐席位' : 'Book a Table to Taste'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

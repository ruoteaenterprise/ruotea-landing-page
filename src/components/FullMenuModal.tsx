import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Utensils, Flame, UtensilsCrossed, Soup, CupSoda, Coffee, Sparkles, Cookie, PlusCircle, CalendarDays, Search } from 'lucide-react';
import { FULL_MENU_ITEMS, FULL_MENU_CATEGORIES, FullMenuItem } from '../fullMenuData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
  lang: 'zh' | 'en';
}

export default function FullMenuModal({ isOpen, onClose, onBookClick, lang }: FullMenuModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredItems = FULL_MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      item.nameZh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.descZh && item.descZh.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-3.5 h-3.5" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'Soup': return <Soup className="w-3.5 h-3.5" />;
      case 'CupSoda': return <CupSoda className="w-3.5 h-3.5" />;
      case 'Coffee': return <Coffee className="w-3.5 h-3.5" />;
      case 'Sparkles': return <Sparkles className="w-3.5 h-3.5" />;
      case 'Cookie': return <Cookie className="w-3.5 h-3.5" />;
      case 'PlusCircle': return <PlusCircle className="w-3.5 h-3.5" />;
      default: return <Utensils className="w-3.5 h-3.5" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative bg-[#FAF9F5] border border-brand-border/80 max-w-5xl w-full rounded-2xl shadow-2xl flex flex-col max-h-[92vh] z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-brand-border/60 bg-white/80 backdrop-blur-xs">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] shrink-0" />
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-brand-dark tracking-tight">
                    {lang === 'zh' ? 'RUO TEA 若水植物茶間 全菜單 Menu' : 'RUO TEA Complete Menu'}
                  </h3>
                </div>
                <p className="text-xs text-brand-dark-light/75 mt-1 font-sans pl-4.5">
                  {lang === 'zh' 
                    ? '純粹植物精華 • 養膳煲湯 • 功夫特調茶藝' 
                    : 'Pure Plant Essence • Nourishing Hotpots • Artisanal Tea Craft'}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full border border-brand-border/70 flex items-center justify-center text-brand-dark/70 hover:text-brand-dark hover:bg-brand-cream/80 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Categories & Search */}
            <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar flex-1">
                {FULL_MENU_CATEGORIES.map(cat => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-sans flex items-center gap-1.5 shrink-0 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-brand-blue text-white font-medium shadow-xs'
                          : 'bg-white text-brand-dark-light/80 border border-brand-border/70 hover:border-brand-blue/50 hover:bg-brand-cream/60'
                      }`}
                    >
                      {getCategoryIcon(cat.iconName)}
                      <span>{lang === 'zh' ? `${cat.nameZh} ${cat.nameEn}` : `${cat.nameEn} ${cat.nameZh}`}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-48 shrink-0">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-brand-dark-light/50" />
                <input
                  type="text"
                  placeholder={lang === 'zh' ? '搜尋菜色或食材...' : 'Search items...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-brand-border/70 rounded-full focus:outline-hidden focus:border-brand-blue font-sans text-brand-dark"
                />
              </div>
            </div>
          </div>

          {/* Cards Grid Content */}
          <div className="overflow-y-auto px-5 py-5 flex-1 bg-[#FAF9F5]">
            {filteredItems.length === 0 ? (
              <div className="py-16 text-center text-brand-dark-light/60 text-xs font-sans">
                {lang === 'zh' ? '未找到相符的菜色，請嘗試不同關鍵字。' : 'No matching menu items found.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map(item => (
                  <div
                    key={item.id}
                    className="bg-white border border-brand-border/70 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-brand-blue/40 transition-all duration-200"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-serif font-bold text-base md:text-lg text-brand-dark">
                            {item.nameZh}
                          </h4>
                          {item.badge && (
                            <span className="bg-[#D32F2F] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider shadow-xs">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Price Display */}
                        <div className="text-right shrink-0">
                          {item.setPrice ? (
                            <>
                              <div className="flex items-baseline justify-end gap-1.5">
                                <span className="text-[#608092] font-medium text-xs font-sans">
                                  {lang === 'zh' ? '套餐 Set' : 'Set'}
                                </span>
                                <span className="font-mono font-bold text-sm text-brand-dark">
                                  RM{item.setPrice.toFixed(2)}
                                </span>
                              </div>
                              <div className="text-[11px] font-mono text-brand-dark-light/70 mt-0.5">
                                {lang === 'zh' ? '單點 Ala Carte' : 'Ala Carte'} RM{item.singlePrice.toFixed(2)}
                              </div>
                            </>
                          ) : (
                            <div className="font-mono font-bold text-sm text-brand-dark">
                              RM{item.singlePrice.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* English Subtitle */}
                      <div className="text-xs font-medium text-[#608092] mt-0.5 font-sans">
                        {item.nameEn}
                      </div>

                      {/* Description */}
                      {item.descZh && (
                        <p className="text-xs text-brand-dark-light/80 leading-relaxed mt-2 font-sans">
                          {lang === 'zh' ? item.descZh : item.descEn}
                        </p>
                      )}

                      {/* Sub-options if available */}
                      {(item.soupOptions || item.grainOptions || item.servedWith || item.sauceOptions) && (
                        <div className="mt-2.5 space-y-1 text-[11px] font-sans text-brand-dark-light/75 border-t border-brand-border/40 pt-2">
                          {item.soupOptions && (
                            <div>
                              <span className="text-brand-clay font-medium">{lang === 'zh' ? '選擇湯底：' : 'Soup Base: '}</span>
                              <span>{item.soupOptions.join(' / ')}</span>
                            </div>
                          )}
                          {item.grainOptions && (
                            <div>
                              <span className="text-brand-clay font-medium">{lang === 'zh' ? '主食搭配：' : 'Grain: '}</span>
                              <span>{item.grainOptions.join(' / ')}</span>
                            </div>
                          )}
                          {item.servedWith && (
                            <div>
                              <span className="text-brand-clay font-medium">{lang === 'zh' ? '附配菜色：' : 'Served With: '}</span>
                              <span>{item.servedWith.join('、')}</span>
                            </div>
                          )}
                          {item.sauceOptions && (
                            <div>
                              <span className="text-brand-clay font-medium">{lang === 'zh' ? '附醬料：' : 'Sauces: '}</span>
                              <span>{item.sauceOptions.join(' / ')}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Ingredient Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-brand-border/40">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F5F5F3] text-brand-dark-light/85 text-[10px] px-2.5 py-0.5 rounded-md border border-brand-border/60 font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 bg-white border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-brand-dark-light/75 font-sans">
              <span className="text-brand-clay font-medium">{lang === 'zh' ? '提示：' : 'Note: '}</span>
              {lang === 'zh'
                ? '可於預約時於備註填寫您心儀的菜色或飲食需求。'
                : 'You may specify your preferred dishes or dietary requirements when booking.'}
            </p>

            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-2 rounded-[20px] text-xs font-mono uppercase tracking-wider font-semibold shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '立即預約席位用餐' : 'Reserve a Table'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

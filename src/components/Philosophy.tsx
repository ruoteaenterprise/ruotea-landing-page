import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Flame, Leaf, Compass, Sparkles, Coffee, Eye, ChevronDown } from 'lucide-react';
import { ASSETS } from '../data';

interface PhilosophyProps {
  lang: 'zh' | 'en';
}

export default function Philosophy({ lang }: PhilosophyProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    {
      id: 'pure-vegan',
      categoryZh: '品牌故事',
      categoryEn: 'Brand Story',
      icon: <Leaf className="w-4 h-4 text-brand-blue-dark" />,
      titleZh: "以茶為媒，靜心養膳",
      titleEn: "Tea-Inspired Mindful Nourishment",
      descZh: "在「RUO TEA 若水植物茶間」，我們相信飲食不僅是味覺的享受，更是滋養身心的儀式。我們取水之柔和、植本之精華，為都市人尋回內心的清寧。",
      descEn: 'At "RUO TEA", we believe dining is not merely a delight for the palate, but a sacred ritual to nourish both body and mind. Drawing from the gentleness of water and the pure essence of botanicals, we help urbanites rediscover inner peace and tranquility.',
      image: "https://images.ruotea.com/aboutus1.png",
      quoteZh: "「我們取水之柔和、植本之精華，為都市人尋回內心的清寧。」",
      quoteEn: '"Drawing from the gentleness of water and the pure essence of botanicals, we help urbanites rediscover inner peace."'
    },
    {
      id: 'tea-hearth',
      categoryZh: '膳藝理念',
      categoryEn: 'Culinary Philosophy',
      icon: <Coffee className="w-4 h-4 text-brand-blue-dark" />,
      titleZh: "植本養生與養膳煲湯",
      titleEn: "Plant-Based Nourishing Claypots",
      descZh: "我們堅信「天然、無五辛、純淨」的美味，嚴選特級藥膳本草與天然純素食材，慢火燉煮出香氣濃郁的滋補養生湯底。搭配香氣四溢的黑松露石鍋拌飯與功夫冷萃茶，為味蕾與身心帶來純粹而深度的自然滋養。",
      descEn: "Carefully selected premium medicinal herbs and 100% natural vegan ingredients, slow-simmered to create a deeply aromatic and nourishing herbal broth. Paired with fragrant black truffle stone-pot rice and artisanal cold-brew tea, offering pure restorative wellness.",
      image: "https://images.ruotea.com/aboutus2.jpg",
      quoteZh: "「珍稀本草煲湯，手作精緻植物茶膳。」",
      quoteEn: '"Precious herbal botanical broths and artisanal plant-based tea delicacies."'
    },
    {
      id: 'tea-brewing',
      categoryZh: '茶藝精神',
      categoryEn: 'Tea Artistry',
      icon: <Flame className="w-4 h-4 text-brand-blue-dark" />,
      titleZh: "古法慢沏・老陶沖淋",
      titleEn: "Clay Pot Slow Brewing",
      descZh: "「水為茶之母，器為茶之父。」我們傳承古老茶道儀軌，使用老陶土捏製之蓋碗與砂壺慢火煨煮。陶土獨特的微孔呼吸結構，能柔化水質、收斂茶澀，沏出原片茶葉最溫潤、回甘的靈魂。",
      descEn: "Water is the mother of tea, and the vessel is its father. Following traditional brewing practices, we use aged clay teapots and cups. The porous clay structure softens the water and captures the absolute essence of loose leaves, ensuring an endless sweet, full-bodied throat feel.",
      image: "https://images.ruotea.com/aboutus3.jpg",
      quoteZh: "「一呼一吸間，水汽與葉片溫柔對話。」",
      quoteEn: '"Between every breath, a gentle dialogue between steam and tea leaves."'
    },
    {
      id: 'tatami',
      categoryZh: '極簡禪意',
      categoryEn: 'Minimalist Zen',
      icon: <Compass className="w-4 h-4 text-brand-blue-dark" />,
      titleZh: "幽靜茶廬 恬靜空間",
      titleEn: "Tranquil Tea House & Zen Sanctuary",
      descZh: "RUO TEA 以原木、淺灰微水泥壁面與清雅竹影交織出淡雅的東方禪意空間。無論是獨自前來品一壺溫潤普洱，或是與好友共享植本養膳煲湯，都能在此放下喧囂，重拾平靜。",
      descEn: "RUO TEA blends natural timber, soft microcement textures, and gentle bamboo silhouettes to create an ethereal Eastern Zen atmosphere. Whether sipping aged Pu'er in solitude or sharing warm nourishing herbal claypots with close friends, find a serene haven to pause and recharge.",
      image: "https://images.ruotea.com/aboutus4.jpg",
      quoteZh: "「席地而坐的沉浸式品茶用餐氛圍，深受顧客喜愛，建議提前線上預約。」",
      quoteEn: '"An immersive, floor-seated tea & dining experience cherished by guests. Online reservation in advance is recommended."'
    },
    {
      id: 'moon-niche',
      categoryZh: '視覺核心',
      categoryEn: 'Visual Anchor',
      icon: <Sparkles className="w-4 h-4 text-brand-blue-dark" />,
      titleZh: "滿月背光壁龕",
      titleEn: "The Backlit Moon Niche",
      descZh: "茶間的視覺核心——一個巨大的圓形發光牆面壁龕，象徵著「禪意之月、圓滿與虛空」。柔和暖白的背光烘托著放置在中央的高級手捏陶藝。它隨著日光微調亮度，提供心靈無限的平靜寄託。",
      descEn: "The aesthetic soul of Ruo Tea—a majestic circular backlit wall cavity symbolizing complete harmony, void, and mindfulness. The soft, glow-diffused ring highlights ancient hand-pinched pottery and calms thoughts instantly.",
      image: "https://images.ruotea.com/aboutus5.jpg",
      quoteZh: "「一輪明月寄禪心，映照陶藝與虛空。」",
      quoteEn: '"A glowing full moon embodying mindfulness, casting ambient light on clay arts."'
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-white relative overflow-hidden border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-brand-border/60 mb-10 items-end">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-clay uppercase font-semibold block">
              {lang === 'zh' ? '關於我們的初衷與空間' : 'OUR PHILOSOPHY & ZEN SPACE'}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-brand-dark">
              {lang === 'zh' ? '植感理念與寂靜空間' : 'Philosophy & Zen Sanctuary'}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-brand-dark-light/80 leading-relaxed font-sans">
              {lang === 'zh'
                ? '「一壺好茶，一碗溫湯，一席寂靜。」我們結合天然純素飲食、古法老陶沏茶與侘寂空間美學，在繁忙都市中開闢出一席身心靈平靜的庇護所。'
                : 'Combining pure vegan cuisine, traditional claypot tea brewing, and wabi-sabi aesthetics, we offer a peaceful sanctuary to slow down, reflect, and enjoy.'}
            </p>
          </div>
        </div>

        {/* Interactive Accordion List: Images & Details render directly inside each expanded button */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="pb-3 flex items-center justify-between border-b border-brand-border/40">
            <span className="text-xs font-mono text-brand-clay font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-dark" />
              {lang === 'zh' ? '點擊按鈕切換理念與空間說明' : 'CLICK ANY ITEM TO EXPAND DETAILS'}
            </span>
            <span className="text-xs font-mono text-brand-dark-light/50">
              {items.length} {lang === 'zh' ? '項主題' : 'Topics'}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {items.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`border transition-all duration-300 relative overflow-hidden rounded-[20px] ${
                    isSelected
                      ? 'bg-brand-cream border-brand-blue-dark shadow-xs'
                      : 'bg-white border-brand-border hover:bg-brand-cream/30'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isSelected ? null : idx)}
                    className="w-full text-left p-4.5 md:p-5 cursor-pointer flex items-center justify-between group rounded-[20px]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-[20px] border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isSelected
                          ? 'bg-brand-blue/20 border-brand-blue-dark text-brand-blue-dark'
                          : 'bg-brand-cream border-brand-border text-brand-dark-light/60 group-hover:border-brand-blue-dark/40'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-wider font-semibold uppercase text-brand-clay block">
                          {lang === 'zh' ? item.categoryZh : item.categoryEn}
                        </span>
                        <h3 className="font-serif font-bold text-base md:text-lg text-brand-dark tracking-wide mt-0.5">
                          {lang === 'zh' ? item.titleZh : item.titleEn}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 shrink-0">
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-brand-blue-dark text-white border-brand-blue-dark'
                          : 'bg-white text-brand-dark-light/50 border-brand-border group-hover:border-brand-blue-dark/50'
                      }`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4.5 pb-5 md:px-5 md:pb-6 pt-1 border-t border-brand-border/40 space-y-4">
                          
                          {/* Photo rendered directly under the button */}
                          <div className="aspect-[16/9] w-full relative overflow-hidden bg-brand-cream border border-brand-border/60 group rounded-[20px]">
                            <img
                              src={item.image}
                              alt={lang === 'zh' ? item.titleZh : item.titleEn}
                              className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            
                            {/* Category Badge Overlay */}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-brand-border px-3 py-1 flex items-center gap-1.5 shadow-xs rounded-[20px]">
                              <Eye className="w-3.5 h-3.5 text-brand-blue-dark animate-pulse" />
                              <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-brand-dark-light">
                                {lang === 'zh' ? item.categoryZh : item.categoryEn}
                              </span>
                            </div>
                          </div>

                          {/* Quote under image */}
                          <div className="px-3.5 py-2.5 bg-white border-l-2 border-brand-blue-dark border-t border-r border-b border-brand-border/40 rounded-[20px]">
                            <span className="block text-[9px] font-mono text-brand-clay font-bold uppercase tracking-widest mb-0.5">
                              {lang === 'zh' ? item.titleZh : item.titleEn}
                            </span>
                            <p className="font-serif italic serif-italic text-xs md:text-sm text-brand-blue-dark font-semibold">
                              {lang === 'zh' ? item.quoteZh : item.quoteEn}
                            </p>
                          </div>

                          {/* Detailed description */}
                          <p className="text-xs md:text-sm text-brand-dark-light/90 font-sans leading-relaxed pt-1">
                            {lang === 'zh' ? item.descZh : item.descEn}
                          </p>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


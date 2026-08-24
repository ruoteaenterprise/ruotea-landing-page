import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { BRAND_NAME_ZH, RESTAURANT_INFO, ASSETS } from '../data';

interface FooterProps {
  lang: 'zh' | 'en';
  onScrollTo: (elementId: string) => void;
  onOpenReservation: () => void;
}

export default function Footer({ lang, onScrollTo, onOpenReservation }: FooterProps) {
  const footerLinks = [
    { id: 'hero', zh: '回到首頁', en: 'Back to Top' },
    { id: 'philosophy', zh: '品牌故事', en: 'Our Philosophy' },
    { id: 'menu', zh: '精選菜單', en: 'View Menu' },
    { id: 'reservation', zh: '線上訂位', en: 'Table Reservation' }
  ];

  return (
    <footer className="bg-brand-dark text-brand-cream py-16 border-t border-brand-border/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-border/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full border border-brand-border/20 bg-white flex items-center justify-center p-0.5">
                <img
                  src={ASSETS.logo}
                  alt="RUO TEA Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-wider text-white">
                  RUO TEA
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-blue-light font-medium -mt-1">
                  植物茶間
                </span>
              </div>
            </div>
            
            <p className="text-xs text-brand-cream/60 leading-relaxed font-sans max-w-sm">
              {lang === 'zh'
                ? '植物茶間結合古法手沏茶道與現代植感養生蔬食，在侘寂極簡的溫暖空間裡，為每一位到訪的朋友盛裝大自然的恬靜與滋補。'
                : 'Merging pure plant-based nutrition with centuries-old claypot tea rituals. Discover comfort, healing flavor, and tranquility inside our wabi-sabi tea house.'}
            </p>

            <div className="flex gap-3 text-brand-cream/40">
              <a href={RESTAURANT_INFO.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-[20px] border border-brand-border/10 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={RESTAURANT_INFO.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-[20px] border border-brand-border/10 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'zh' ? '快速導覽' : 'NAVIGATION'}
            </h4>
            <ul className="space-y-2 text-xs font-sans text-brand-cream/70">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (link.id === 'reservation') {
                        onOpenReservation();
                      } else {
                        onScrollTo(link.id);
                      }
                    }}
                    className="hover:text-brand-blue-light hover:underline transition-colors cursor-pointer text-left"
                  >
                    {lang === 'zh' ? link.zh : link.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'zh' ? '聯絡與位置資訊' : 'FIND & REACH US'}
            </h4>
            <ul className="space-y-3 text-xs font-mono text-brand-cream/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-blue-light shrink-0" />
                <span className="font-sans leading-relaxed">
                  {lang === 'zh' ? RESTAURANT_INFO.address : RESTAURANT_INFO.englishAddress}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue-light shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue-light shrink-0" />
                <span className="font-sans">{RESTAURANT_INFO.email}</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="block text-[10px] font-mono text-brand-clay font-bold uppercase tracking-widest mb-1">
                {lang === 'zh' ? '營業時間提醒' : 'HOURS & CLOSING'}
              </span>
              <p className="text-[10px] text-brand-cream/40 leading-relaxed font-sans">
                {lang === 'zh'
                  ? '週一、週二及週四至週日 11:00 - 21:00 全天營業；每週三為固定公休日。'
                  : 'Open Mon-Tue & Thu-Sun 11:00 - 21:00 (All Day). Closed on Wednesdays.'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-mono text-brand-cream/40">
          <div>
            © 2026 {BRAND_NAME_ZH}. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors">{lang === 'zh' ? '隱私宣告' : 'Privacy Policy'}</span>
            <span>|</span>
            <span className="hover:text-white transition-colors">{lang === 'zh' ? '使用條款' : 'Terms of Use'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

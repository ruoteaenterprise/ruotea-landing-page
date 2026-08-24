import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, ChevronDown, ChevronUp } from 'lucide-react';
import { REVIEWS } from '../data';

interface ReviewsSectionProps {
  lang: 'zh' | 'en';
}

interface ReviewCardProps {
  key?: string;
  review: typeof REVIEWS[0];
  index: number;
  lang: 'zh' | 'en';
}

function ReviewCard({ review, index, lang }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = lang === 'zh' ? review.text : review.englishText;
  
  // Cut at approx 1/3 of length for initial preview
  const previewLength = Math.max(35, Math.floor(fullText.length / 3));
  const shouldTruncate = fullText.length > previewLength + 10;

  const displayText = (!isExpanded && shouldTruncate)
    ? `${fullText.slice(0, previewLength)}...`
    : fullText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white border border-brand-border p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group rounded-[20px]"
    >
      {/* Decorative quotation icon */}
      <div className="absolute top-4 right-4 text-brand-blue/15 group-hover:text-brand-blue/30 transition-colors duration-300">
        <MessageSquareQuote className="w-8 h-8" />
      </div>

      <div className="space-y-4">
        {/* Stars */}
        <div className="flex gap-0.5 text-brand-clay">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Review Text */}
        <div>
          <p className="text-xs md:text-sm text-brand-dark-light/95 leading-relaxed font-sans transition-all">
            {displayText}
          </p>

          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono font-bold text-brand-blue-dark hover:underline cursor-pointer group/btn"
            >
              <span>
                {isExpanded
                  ? (lang === 'zh' ? '收起內容' : 'Show Less')
                  : (lang === 'zh' ? '展開完整評價' : 'Read Full Review')}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-y-0.5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Author Info */}
      <div className="mt-6 pt-4 border-t border-brand-border/50 flex justify-between items-end text-xs font-mono">
        <div>
          <span className="font-semibold text-brand-dark block">
            {review.author}
          </span>
          {review.badge && (
            <span className="text-[10px] text-brand-blue-dark font-medium inline-block mt-0.5 bg-brand-blue/10 px-1.5 py-0.5 rounded-[20px] border border-brand-blue/20">
              {review.badge}
            </span>
          )}
        </div>
        <span className="text-brand-dark-light/50 text-[11px]">
          {lang === 'zh' ? (review.dateZh || review.date) : review.date}
        </span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection({ lang }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-20 bg-brand-cream/40 relative overflow-hidden border-b border-brand-border/60">
      <div className="absolute inset-y-0 left-10 md:left-24 w-[1px] bg-brand-border/30 -z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-10 md:right-24 w-[1px] bg-brand-border/30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-clay uppercase font-semibold block">
            {lang === 'zh' ? '雅客留聲' : 'GUEST RECOLLECTIONS'}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-brand-dark">
            {lang === 'zh' ? '茶客真實反饋' : 'Guest Reflections'}
          </h2>
          <p className="text-sm text-brand-dark-light/80 leading-relaxed font-sans">
            {lang === 'zh'
              ? '聽聽曾在植物茶間稍作停留、慢享熱湯與香茗的賓客們，所留下的溫暖字句。'
              : 'Warm reflections shared by our guests who sat back, savored hot broths, and enjoyed moments of clarity.'}
          </p>
        </div>

        {/* Editorial Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} lang={lang} />
          ))}
        </div>

        {/* Brand Stamp Section */}
        <div className="mt-16 text-center">
          <p className="font-serif italic serif-italic text-sm text-brand-clay">
            {lang === 'zh' ? '— 期待與您在植物茶間相遇，慢品生活真味 —' : '— Looking forward to sharing deep breaths and fine tea with you —'}
          </p>
        </div>

      </div>
    </section>
  );
}

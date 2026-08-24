import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, Clipboard, CheckCircle, Sparkles, Clock, Users, ArrowLeft, Trash2, Download, MessageSquare, X, CalendarDays, MapPin } from 'lucide-react';
import { TableReservation } from '../types';
import { RESTAURANT_INFO } from '../data';

interface ReservationFormProps {
  lang: 'zh' | 'en';
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function ReservationForm({ lang, isOpen, onOpen, onClose }: ReservationFormProps) {
  const [formData, setFormData] = useState<TableReservation>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '12:00',
    guests: '2人',
    dietaryNotes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmedData, setConfirmedData] = useState<TableReservation | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);
  const [allBookings, setAllBookings] = useState<any[]>([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [isConfirmingClearAll, setIsConfirmingClearAll] = useState(false);

  // Load bookings on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ruo_tea_bookings');
      if (stored) {
        setAllBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading bookings from localStorage', e);
    }
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const formatWhatsAppNumber = (phone: string): string => {
    let clean = phone.replace(/\D/g, ''); // keep digits only
    if (clean.startsWith('0')) {
      return '60' + clean.slice(1);
    }
    if (clean.startsWith('60')) {
      return clean;
    }
    if (clean.length >= 9 && clean.length <= 11) {
      return '60' + clean;
    }
    return clean;
  };

  const getCustomerWhatsAppLink = (data: TableReservation) => {
    const text = `您好 Ruo Tea 植物茶間，我想確認我的線上訂位：
姓名：${data.name}
電話：${data.phone}${data.email ? `\n電子郵件：${data.email}` : ''}
日期：${data.date}
時間：${data.time}
人數：${data.guests}
備註：${data.dietaryNotes || '無'}`;
    return `https://wa.me/60126725469?text=${encodeURIComponent(text)}`;
  };

  const getMerchantWhatsAppLink = (item: any) => {
    const formattedPhone = formatWhatsAppNumber(item.phone);
    const text = `您好 ${item.name}！這裡是 Ruo Tea 植物茶間。🍵

我們已收到您在 ${item.date} ${item.time} 的訂位（人數：${item.guests}）。
非常期待您的光臨！如有任何變動，請隨時通知我們。

地址：80, Persiaran Midlands, George Town, Malaysia, 10250
聯絡電話：012-672 5469`;
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  };

  const deleteBooking = (id: string) => {
    if (confirmDeleteId === id) {
      const updated = allBookings.filter(b => b.id !== id);
      setAllBookings(updated);
      localStorage.setItem('ruo_tea_bookings', JSON.stringify(updated));
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
      setTimeout(() => {
        setConfirmDeleteId(prev => prev === id ? null : prev);
      }, 3000); // Reset confirm after 3s
    }
  };

  const clearAllBookings = () => {
    if (isConfirmingClearAll) {
      setAllBookings([]);
      localStorage.removeItem('ruo_tea_bookings');
      setIsConfirmingClearAll(false);
    } else {
      setIsConfirmingClearAll(true);
      setTimeout(() => {
        setIsConfirmingClearAll(false);
      }, 4000);
    }
  };

  const exportToCSV = () => {
    if (allBookings.length === 0) return;
    
    // Header with UTF-8 BOM
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "姓名 (Name),聯絡電話 (Phone),電子郵件 (Email),日期 (Date),時段 (Time),人數 (Guests),備註 (Notes),建立時間 (Created At)\n";
    
    // Rows
    allBookings.forEach((b) => {
      const notes = b.dietaryNotes ? b.dietaryNotes.replace(/"/g, '""') : '';
      const emailStr = b.email ? b.email.replace(/"/g, '""') : '';
      csvContent += `"${b.name}","${b.phone}","${emailStr}","${b.date}","${b.time}","${b.guests}","${notes}","${b.createdAt || ''}"\n`;
    });
    
    // Download trigger
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ruo_tea_reservations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pre-configured elegant hours
  const timeSlots = [
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
    "19:00", "19:30", "20:00"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let stateKey = name;
    if (name === 'custName') stateKey = 'name';
    if (name === 'custPhone') stateKey = 'phone';
    if (name === 'custEmail') stateKey = 'email';
    if (name === 'bookingDate') stateKey = 'date';
    if (name === 'bookingTime') stateKey = 'time';
    if (name === 'note') stateKey = 'dietaryNotes';

    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
    setErrorMsg('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMsg(lang === 'zh' ? '請輸入您的姓名' : 'Please enter your name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg(lang === 'zh' ? '請輸入有效的聯絡電話' : 'Please enter a valid phone number');
      return;
    }
    if (!formData.email?.trim() || !formData.email.includes('@')) {
      setErrorMsg(lang === 'zh' ? '請輸入有效的電子郵件' : 'Please enter a valid email address');
      return;
    }
    if (!formData.date) {
      setErrorMsg(lang === 'zh' ? '請選擇預約日期' : 'Please select a date');
      return;
    }

    // Set loading state to simulate submission
    setLoading(true);

    const targetUrl = "https://script.google.com/macros/s/AKfycby1cMEjm1Vz9wvsPJJcnJrfQL0mtfuSU_IuCw1ubBOgFCJRNqvMRGDJAo9DVcMRS6XOfA/exec";
    
    // Create url-encoded search parameters for the POST request
    const params = new URLSearchParams();
    params.append('custName', formData.name);
    params.append('name', formData.name);
    params.append('custPhone', formData.phone);
    params.append('phone', formData.phone);
    params.append('custEmail', formData.email || '');
    params.append('email', formData.email || '');
    params.append('bookingDate', formData.date);
    params.append('date', formData.date);
    params.append('bookingTime', formData.time);
    params.append('time', formData.time);
    params.append('guests', formData.guests.toString());
    params.append('note', formData.dietaryNotes || '');
    params.append('dietaryNotes', formData.dietaryNotes || '');

    fetch(targetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    })
    .then(() => {
      setLoading(false);
      setSubmitted(true);
      setConfirmedData({ ...formData });
      
      // Save to localStorage (allows local offline access as well for the merchant panel)
      try {
        const stored = localStorage.getItem('ruo_tea_bookings');
        const currentBookings = stored ? JSON.parse(stored) : [];
        const newBooking = {
          ...formData,
          id: Date.now().toString(),
          createdAt: new Date().toLocaleString('zh-SG', { timeZone: 'Asia/Singapore' })
        };
        const updated = [newBooking, ...currentBookings];
        localStorage.setItem('ruo_tea_bookings', JSON.stringify(updated));
        setAllBookings(updated);
      } catch (err) {
        console.error('Error saving to localStorage', err);
      }

      // Trigger user requested alert prompt
      alert(lang === 'zh' ? "您的席位預訂資料已成功提交，我們會儘快與您聯繫確認！" : "Your reservation has been successfully submitted!");

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '12:00',
        guests: '2人',
        dietaryNotes: ''
      });
    })
    .catch((err) => {
      console.error('Error submitting to Google Sheet:', err);
      setErrorMsg(lang === 'zh' ? '提交失敗，請檢查網路連線或稍後再試' : 'Submission failed. Please check your network or try again.');
      setLoading(false);
    });
  };

  return (
    <>
      {/* Landing Page Reservation Overview Section */}
      <section id="reservation" className="py-20 bg-white relative overflow-hidden border-b border-brand-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-brand-cream border border-brand-border p-8 md:p-12 relative flex flex-col justify-between items-center text-center space-y-6 shadow-xs rounded-[20px]">
            <div className="w-16 h-16 bg-brand-blue/10 border border-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue-dark">
              <CalendarDays className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-clay font-bold uppercase tracking-widest block">
                {lang === 'zh' ? '線上訂位通道' : 'SECURE BOOKING SYSTEM'}
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-dark">
                {lang === 'zh' ? (
                  <>
                    預約您的<br className="sm:hidden" />植物茶間席次
                  </>
                ) : (
                  'Reserve Your Zen Seat'
                )}
              </h2>
              <p className="text-xs md:text-sm text-brand-dark-light/80 leading-relaxed font-sans max-w-xl mx-auto pt-1">
                {lang === 'zh'
                  ? '點擊下方按鈕即可開啟彈窗表單，瀏覽營業時間與訂位須知，並即時完成席位預訂。'
                  : 'Click the button below to view dining hours, booking terms, and submit your table reservation online.'}
              </p>
            </div>

            <div className="w-full max-w-md pt-2">
              <button
                onClick={onOpen}
                className="w-full py-4 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs uppercase tracking-widest font-mono font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 rounded-[20px]"
              >
                <CalendarDays className="w-4 h-4" />
                <span>{lang === 'zh' ? '點擊線上預訂席位' : 'Click to Reserve Table Online'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pop-out Reservation Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-brand-cream border border-brand-border shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 p-6 md:p-8 rounded-[20px]"
            >
              {/* Close X Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-brand-dark-light hover:text-brand-dark hover:bg-brand-border/40 transition-colors cursor-pointer z-20 rounded-[20px]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {isAdmin ? (
                  /* Admin Dashboard Panel */
                  <motion.div
                    key="admin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-brand-border pb-4 pr-8">
                        <button
                          onClick={() => setIsAdmin(false)}
                          className="flex items-center gap-1.5 text-xs font-mono text-brand-blue-dark hover:underline font-bold cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>{lang === 'zh' ? '返回預訂表單' : 'Back to Form'}</span>
                        </button>
                        <h3 className="font-serif font-bold text-lg text-brand-dark">
                          {lang === 'zh' ? '商家訂位管理後台' : 'Bookings Manager'}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 justify-between">
                        <span className="text-xs font-mono text-brand-dark-light/60">
                          {lang === 'zh' ? `目前累計：${allBookings.length} 筆預約` : `${allBookings.length} Reservations Total`}
                        </span>
                        <div className="flex gap-2">
                          {allBookings.length > 0 && (
                            <>
                              <button
                                onClick={exportToCSV}
                                className="px-2.5 py-1.5 bg-white border border-brand-border text-[11px] font-mono hover:bg-brand-cream-dark transition-all duration-200 flex items-center gap-1 text-brand-dark-light font-medium cursor-pointer"
                              >
                                <Download className="w-3 h-3" />
                                <span>{lang === 'zh' ? '匯出 CSV' : 'Export'}</span>
                              </button>
                              <button
                                onClick={clearAllBookings}
                                className={`px-2.5 py-1.5 border text-[11px] font-mono transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                                  isConfirmingClearAll
                                    ? 'bg-red-500 border-red-600 text-white font-bold'
                                    : 'bg-white border-brand-border text-red-600 hover:bg-red-50'
                                }`}
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>
                                  {isConfirmingClearAll
                                    ? (lang === 'zh' ? '確認清空？' : 'Confirm?')
                                    : (lang === 'zh' ? '清空全部' : 'Clear All')}
                                </span>
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Booking List Container */}
                      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                        {allBookings.length === 0 ? (
                          <div className="text-center py-12 bg-white border border-brand-border/40 text-xs font-mono text-brand-dark-light/40">
                            {lang === 'zh' ? '暫無任何訂位紀錄' : 'No reservations registered yet'}
                          </div>
                        ) : (
                          allBookings.map((b) => (
                            <div
                              key={b.id}
                              className="bg-white border border-brand-border p-3.5 space-y-2 text-xs relative group hover:border-brand-blue/40 transition-colors duration-200"
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-serif font-bold text-sm text-brand-dark">
                                    {b.name} <span className="font-mono text-[10px] font-normal text-brand-dark-light/50">({b.guests})</span>
                                  </h4>
                                  <p className="font-mono text-brand-dark-light/70 text-[11px] mt-0.5">
                                    📞 {b.phone}
                                  </p>
                                  {b.email && (
                                    <p className="font-mono text-brand-dark-light/70 text-[11px] mt-0.5">
                                      ✉️ {b.email}
                                    </p>
                                  )}
                                </div>
                                <span className="font-mono font-bold text-[11px] text-brand-blue-dark px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10">
                                  {b.date} • {b.time}
                                </span>
                              </div>

                              {b.dietaryNotes && (
                                <p className="bg-brand-cream/40 p-2 border border-brand-border/30 text-[11px] text-brand-dark-light leading-relaxed font-sans">
                                  <span className="font-mono font-semibold block text-[10px] text-brand-clay mb-0.5">{lang === 'zh' ? '備註：' : 'Notes:'}</span>
                                  {b.dietaryNotes}
                                </p>
                              )}

                              <div className="flex items-center justify-between pt-2 border-t border-brand-border/40 text-[10px] font-mono">
                                <span className="text-brand-dark-light/40">
                                  {lang === 'zh' ? '建立：' : 'In: '}{b.createdAt || 'N/A'}
                                </span>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => deleteBooking(b.id)}
                                    className={`px-2.5 py-1 border text-[10px] transition-all duration-200 cursor-pointer ${
                                      confirmDeleteId === b.id
                                        ? 'bg-red-500 border-red-600 text-white font-bold'
                                        : 'bg-white border-brand-border text-red-600 hover:bg-red-50'
                                    }`}
                                  >
                                    {confirmDeleteId === b.id ? (lang === 'zh' ? '確刪？' : 'Delete?') : (lang === 'zh' ? '刪除' : 'Delete')}
                                  </button>
                                  <a
                                    href={getMerchantWhatsAppLink(b)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2.5 py-1 bg-[#25D366] text-white font-bold hover:bg-[#128C7E] transition-all duration-200 cursor-pointer flex items-center gap-1 border border-[#25D366]"
                                  >
                                    <MessageSquare className="w-3 h-3 fill-white" />
                                    <span>WhatsApp</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <p className="text-[10px] font-mono text-brand-dark-light/40 text-center pt-4 border-t border-brand-border/40 leading-relaxed">
                      {lang === 'zh'
                        ? '💡 訂位紀錄均儲存於本機瀏覽器（localStorage）。點擊 WhatsApp 按鈕可一鍵預填確認訊息發送予顧客。'
                        : '💡 Data is stored in your local browser storage. Click WhatsApp to send formatted booking confirmation instantly.'}
                    </p>
                  </motion.div>
                ) : !submitted ? (
                  /* Form Interface inside Pop-out Modal */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="pb-3 border-b border-brand-border pr-8">
                      <span className="text-[10px] font-mono text-brand-clay font-bold uppercase tracking-widest block">
                        {lang === 'zh' ? '線上訂位通道' : 'ONLINE RESERVATION'}
                      </span>
                      <h3 className="font-serif font-bold text-xl text-brand-dark mt-0.5">
                        {lang === 'zh' ? '線上即時席位預訂' : 'Instant Table Reservation'}
                      </h3>
                    </div>

                    {/* Information & Terms Block placed inside pop-out modal directly above input fields */}
                    <div className="bg-white border border-brand-border/80 p-4 space-y-3 text-left shadow-xs">
                      <p className="text-xs text-brand-dark-light/85 leading-relaxed font-sans">
                        {lang === 'zh'
                          ? '植物茶間席位有限，我們提供精緻的和風榻榻米坐席與木質桌椅。為維護空間品質與用餐體驗，席位將為您保留 10 分鐘。若有特殊需求或包場，請隨時致電聯絡。'
                          : 'Seating at Ruo Tea is limited. We offer Japanese tatami-style seats and classic wood tables. To ensure quality, reservations are held for 10 minutes. For private bookings, please contact us.'}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-border/50 text-xs">
                        <div className="flex gap-2.5 items-start">
                          <div className="w-5 h-5 mt-0.5 rounded-none border border-brand-blue/30 bg-brand-blue/5 flex items-center justify-center shrink-0">
                            <Clock className="w-3.5 h-3.5 text-brand-blue-dark" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-bold text-xs text-brand-dark leading-tight">
                              {lang === 'zh' ? '營業時間' : 'Dining Hours'}
                            </h4>
                            <ul className="text-[11px] text-brand-dark-light/80 space-y-1 mt-1 font-sans leading-5">
                              {lang === 'zh' ? (
                                <>
                                  <li className="leading-5 whitespace-nowrap">• 週一 至 週二 : 11:00 - 21:00 (全天)</li>
                                  <li className="leading-5 whitespace-nowrap">• 週三公休</li>
                                  <li className="leading-5 whitespace-nowrap">• 週四 至 週日 : 11:00 - 21:00 (全天)</li>
                                </>
                              ) : (
                                <>
                                  <li className="leading-5 whitespace-nowrap">• Mon - Tue: 11:00 - 21:00 (All Day)</li>
                                  <li className="leading-5 whitespace-nowrap">• Wed: Closed</li>
                                  <li className="leading-5 whitespace-nowrap">• Thu - Sun: 11:00 - 21:00 (All Day)</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start">
                          <div className="w-5 h-5 mt-0.5 rounded-none border border-brand-blue/30 bg-brand-blue/5 flex items-center justify-center shrink-0">
                            <Users className="w-3.5 h-3.5 text-brand-blue-dark" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-bold text-xs text-brand-dark leading-tight">
                              {lang === 'zh' ? '入店須知' : 'House Rules'}
                            </h4>
                            <ul className="text-[11px] text-brand-dark-light/80 space-y-1 mt-1 font-sans leading-5">
                              {lang === 'zh' ? (
                                <>
                                  <li className="leading-5 whitespace-nowrap">• 每人最低消費RM38。</li>
                                  <li className="leading-5 whitespace-nowrap">• 不可攜帶8歲以下的兒童。</li>
                                  <li className="leading-5 whitespace-nowrap">• 不可攜帶動物。</li>
                                </>
                              ) : (
                                <>
                                  <li className="leading-5 whitespace-nowrap">• Minimum spend of RM38 per person.</li>
                                  <li className="leading-5 whitespace-nowrap">• Children under 8 years old not permitted.</li>
                                  <li className="leading-5 whitespace-nowrap">• No pets or animals allowed.</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Same-day reservation reminder */}
                      <div className="pt-2.5 border-t border-brand-border/50">
                        <div className="p-2.5 bg-[#FFF8F3] border border-[#E8C5B2] rounded-[12px] flex items-start gap-2 text-xs font-sans text-[#A64B2A]">
                          <MessageSquare className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                          <p className="leading-snug font-medium">
                            {lang === 'zh'
                              ? '如果是預約當天的席位，最好預約後發送或撥打 WHATSAPP 給本店來確認是否預約成功！'
                              : 'If reserving for today, please send a message or call us via WhatsApp after booking to confirm availability!'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="bg-red-50 text-red-600 text-xs px-3 py-2 border border-red-200 font-mono">
                        ⚠ {errorMsg}
                      </div>
                    )}

                    {/* Core fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '貴賓姓名' : 'Full Name'} *
                        </label>
                        <div className="relative flex items-center">
                          <User className="absolute left-3 w-4 h-4 text-brand-dark-light/40" />
                          <input
                            type="text"
                            name="custName"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={lang === 'zh' ? '請輸入您的姓名' : 'Enter your name'}
                            className="w-full bg-white border border-brand-border py-2 pl-9 pr-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '聯絡電話' : 'Contact Phone'} *
                        </label>
                        <div className="relative flex items-center">
                          <Phone className="absolute left-3 w-4 h-4 text-brand-dark-light/40" />
                          <input
                            type="tel"
                            name="custPhone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={lang === 'zh' ? '例如 012-345 6789' : 'e.g. 012-345 6789'}
                            className="w-full bg-white border border-brand-border py-2 pl-9 pr-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '電子郵件' : 'Email Address'} *
                        </label>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-3 w-4 h-4 text-brand-dark-light/40" />
                          <input
                            type="email"
                            name="custEmail"
                            value={formData.email || ''}
                            onChange={handleChange}
                            placeholder={lang === 'zh' ? '例如 name@example.com' : 'e.g. name@example.com'}
                            className="w-full bg-white border border-brand-border py-2 pl-9 pr-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                          />
                        </div>
                      </div>

                      {/* Number of guests (Dropdown) */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '用餐人數' : 'Number of Guests'} *
                        </label>
                        <div className="relative flex items-center">
                          <Users className="absolute left-3 w-4 h-4 text-brand-dark-light/40 pointer-events-none z-10" />
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full bg-white border border-brand-border py-2 pl-9 pr-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                          >
                            <option value="1人">{lang === 'zh' ? '1人' : '1 Person'}</option>
                            <option value="2人">{lang === 'zh' ? '2人' : '2 People'}</option>
                            <option value="3人">{lang === 'zh' ? '3人' : '3 People'}</option>
                            <option value="4人">{lang === 'zh' ? '4人' : '4 People'}</option>
                            <option value="其他">{lang === 'zh' ? '其他' : 'Other'}</option>
                          </select>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '預約日期' : 'Reservation Date'} *
                        </label>
                        <div className="relative flex items-center">
                          <Calendar className="absolute left-3 w-4 h-4 text-brand-dark-light/40 pointer-events-none" />
                          <input
                            type="date"
                            name="bookingDate"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full bg-white border border-brand-border py-2 pl-9 pr-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '時段選擇' : 'Preferred Time'} *
                        </label>
                        <select
                          name="bookingTime"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-white border border-brand-border py-2 px-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                        >
                          {timeSlots.map(time => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Dietary Notes */}
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-[11px] font-mono font-bold tracking-wider text-brand-dark-light uppercase">
                          {lang === 'zh' ? '過敏或特殊備註（如需榻榻米區域）' : 'Dietary Notes or Space Request'}
                        </label>
                        <textarea
                          name="note"
                          value={formData.dietaryNotes}
                          onChange={handleChange}
                          placeholder={lang === 'zh' ? '例如：需要榻榻米座位、對特定食材過敏、慶生...' : 'e.g. Request tatami seating, gluten-free, celebrating anniversary...'}
                          rows={2.5}
                          className="w-full bg-white border border-brand-border py-2 px-3 text-sm font-sans focus:outline-none focus:border-brand-blue-dark transition-all duration-200 rounded-[20px]"
                        />
                      </div>
                    </div>

                    {/* Submission */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs uppercase tracking-widest font-mono font-semibold rounded-[20px] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>{lang === 'zh' ? '正在驗證席位...' : 'Securing your table...'}</span>
                          </>
                        ) : (
                          <>
                            <Clipboard className="w-4 h-4" />
                            <span>{lang === 'zh' ? '確認送出線上訂位' : 'Confirm & Complete Booking'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* Success Screen inside Pop-out Modal */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 text-center py-4"
                  >
                    <div className="flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-500">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-green-600 font-bold tracking-widest uppercase">
                        {lang === 'zh' ? '預約成功・席次已鎖定' : 'RESERVATION CONFIRMED'}
                      </span>
                      <h3 className="font-serif font-bold text-xl text-brand-dark">
                        {lang === 'zh' ? '植物茶間誠摯歡迎您' : 'Welcome to Ruo Tea'}
                      </h3>
                      <p className="text-xs text-brand-dark-light/60 max-w-sm mx-auto font-sans leading-relaxed">
                        {lang === 'zh'
                          ? '我們已為您預留好席位，建議點擊下方 WhatsApp 按鈕傳送憑證，以便為您即時確認與保留座位。'
                          : 'A secure table slip has been locked for you. We suggest sending the slip via WhatsApp below to instantly secure.'}
                      </p>
                    </div>

                    {/* Booking Details Slip */}
                    <div className="bg-white border border-brand-border p-4 text-left max-w-md mx-auto space-y-2.5 shadow-xs rounded-[20px]">
                      <div className="flex items-center justify-between border-b border-brand-border pb-1.5 text-xs font-mono">
                        <span className="text-brand-clay font-bold">{lang === 'zh' ? '訂位貴賓' : 'Guest'}</span>
                        <span className="text-brand-dark font-medium">{confirmedData?.name}</span>
                      </div>
                      {confirmedData?.email && (
                        <div className="flex items-center justify-between border-b border-brand-border pb-1.5 text-xs font-mono">
                          <span className="text-brand-clay font-bold">{lang === 'zh' ? '電子郵件' : 'Email'}</span>
                          <span className="text-brand-dark font-medium">{confirmedData?.email}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between border-b border-brand-border pb-1.5 text-xs font-mono">
                        <span className="text-brand-clay font-bold">{lang === 'zh' ? '預約日期' : 'Date'}</span>
                        <span className="text-brand-dark font-medium">{confirmedData?.date}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-brand-border pb-1.5 text-xs font-mono">
                        <span className="text-brand-clay font-bold">{lang === 'zh' ? '預約時間' : 'Time'}</span>
                        <span className="text-brand-dark font-medium">{confirmedData?.time}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-brand-border pb-1.5 text-xs font-mono">
                        <span className="text-brand-clay font-bold">{lang === 'zh' ? '用餐人數' : 'Guests'}</span>
                        <span className="text-brand-dark font-medium">{confirmedData?.guests}</span>
                      </div>
                      {confirmedData?.dietaryNotes && (
                        <div className="text-xs space-y-1 pt-1">
                          <span className="block text-brand-clay font-mono font-bold">{lang === 'zh' ? '備註需求' : 'Notes'}</span>
                          <p className="text-brand-dark-light font-sans bg-brand-cream/50 p-2 border border-brand-border/40 leading-relaxed text-[11px] rounded-[20px]">
                            {confirmedData.dietaryNotes}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* WhatsApp Slip Confirmation Action */}
                    <div className="max-w-md mx-auto pt-1">
                      <a
                        href={confirmedData ? getCustomerWhatsAppLink(confirmedData) : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-mono font-bold hover:bg-[#128C7E] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-sm border border-[#25D366] rounded-[20px]"
                      >
                        <MessageSquare className="w-4 h-4 fill-white text-white" />
                        <span>{lang === 'zh' ? '通過 WhatsApp 傳送確認憑證' : 'Send Booking Slip via WhatsApp'}</span>
                      </a>
                    </div>

                    <div className="pt-2 max-w-md mx-auto">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full py-2.5 border border-brand-dark text-brand-dark text-[11px] uppercase tracking-widest font-mono font-semibold hover:bg-brand-cream-dark transition-all duration-200 cursor-pointer rounded-[20px]"
                      >
                        {lang === 'zh' ? '修改或預訂其他日期' : 'Book Another Day'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import MenuSection from './components/MenuSection';
import ReviewsSection from './components/ReviewsSection';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Smooth scroll handler to elements
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenReservation = () => {
    setIsReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream relative">
      {/* Interactive Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onScrollTo={handleScrollTo}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onScrollTo={handleScrollTo}
          onOpenReservation={handleOpenReservation}
        />

        {/* Interactive Filterable Menu List */}
        <MenuSection
          lang={lang}
          onBookClick={handleOpenReservation}
        />

        {/* Brand Philosophy Stories & Zen Space (Merged Fused Section) */}
        <Philosophy lang={lang} />

        {/* Guest Reviews Testimonials */}
        <ReviewsSection lang={lang} />

        {/* Online Instant Reservation Widget */}
        <ReservationForm
          lang={lang}
          isOpen={isReservationModalOpen}
          onOpen={handleOpenReservation}
          onClose={handleCloseReservation}
        />
      </main>

      {/* Styled Brand Footer */}
      <Footer
        lang={lang}
        onScrollTo={handleScrollTo}
        onOpenReservation={handleOpenReservation}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { OpeningReveal } from './components/OpeningReveal';
import { InvitationCard } from './components/InvitationCard';
import { HomeShowcase } from './components/HomeShowcase';
import { EventDetails } from './components/EventDetails';
import { BestCompliments } from './components/BestCompliments';
import { AudioAmbiance } from './components/AudioAmbiance';
import { ArabesqueMedallion } from './components/DecorativeDividers';

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  // Trigger delicate gold shimmer confetti when invitation is opened
  const handleOpenInvitation = () => {
    setIsRevealed(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#B49A65', '#D9C79F', '#FAF7F0', '#DDD0BB'],
        ticks: 220,
        gravity: 0.8,
        scalar: 0.85,
        shapes: ['circle'],
      });
    } catch (e) {
      // Fallback
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    setIsRevealed(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-[#F3EBDD] text-[#3E342B] font-sans antialiased overflow-x-hidden">
      {/* Background subtle texture throughout page */}
      <div className="fixed inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

      {/* Ambient Soundscape Controller */}
      <AudioAmbiance />

      {/* Opening Full-screen Animation Screen */}
      <OpeningReveal onOpen={handleOpenInvitation} isRevealed={isRevealed} />

      {/* Main Website Experience (Revealed after clicking "View Invitation") */}
      {isRevealed && (
        <motion.main
          id="main-invitation-container"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Top Subtle Header Bar */}
          <header className="w-full max-w-4xl mx-auto pt-6 pb-2 px-6 flex items-center justify-between border-b border-[#DDD0BB]/50 text-xs font-cinzel text-[#82786C]">
            <div className="flex items-center gap-2">
              <ArabesqueMedallion className="w-5 h-5 text-[#B49A65]" />
              <span className="tracking-[0.25em] uppercase font-semibold text-[#3E342B]">
                Eiffel
              </span>
            </div>
            <span className="tracking-widest uppercase text-[10px]">
              Housewarming • 2026
            </span>
          </header>

          {/* Section 1: Main Centered Invitation Card */}
          <InvitationCard />

          {/* Section 2: Home Name Showcase & Architectural Villa Photograph */}
          <HomeShowcase />

          {/* Section 3: Event Details, Date, Countdown, Directions & Contact */}
          <EventDetails />

          {/* Section 4: Best Compliments From & Closing Message */}
          <BestCompliments onReplay={handleReplay} />
        </motion.main>
      )}
    </div>
  );
}

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IslamicArchSVG } from './IslamicArch';
import { Bismillah } from './Bismillah';
import { ChevronDown } from 'lucide-react';

export const OpeningReveal = ({ onOpen, isRevealed }) => {
  // Random subtle floating dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <AnimatePresence>
      {!isRevealed && (
        <motion.div
          key="opening-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -25,
            scale: 1.01,
            transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F0] overflow-hidden select-none p-4"
        >
          {/* Subtle Paper Texture & Islamic Background */}
          <div className="absolute inset-0 bg-islamic-pattern opacity-45 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#FAF7F0]/30 to-[#F3EBDD]/90 pointer-events-none" />

          {/* Floating Gold Dust Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-[#B49A65]/35"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.15, 0.65, 0.15],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* The Proportioned Architectural Arch Invitation Card */}
          <div className="relative w-full max-w-[390px] h-[640px] max-h-[92vh] flex flex-col items-center justify-between mx-auto shadow-2xl rounded-t-full">
            
            {/* Islamic Arch SVG Background with Animated Stroke Drawing & Plinths */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <IslamicArchSVG className="w-full h-full" animate={true} />
            </div>

            {/* Top: Arabic Bismillah (Gently seated in the broad upper curve) */}
            <div className="relative z-10 pt-20 sm:pt-24 px-4 text-center w-full">
              <Bismillah size="default" animate={true} />
            </div>

            {/* Middle: INVITATION + EIFFEL + Subtitle */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 my-auto w-full">
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                transition={{ duration: 1.0, delay: 0.7 }}
                className="text-[10px] sm:text-xs uppercase font-cinzel text-[#82786C] font-semibold tracking-[0.35em] mb-1"
              >
                INVITATION
              </motion.span>

              {/* Main Title: Just EIFFEL in majestic Great Vibes cursive script */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="relative my-1"
              >
                <h1 className="font-cursive text-6xl sm:text-7xl md:text-8xl text-[#3E342B] font-normal leading-none drop-shadow-xs tracking-wide py-1 select-none">
                  Eiffel
                </h1>
              </motion.div>

              {/* Delicate Animated Gold Line with Diamond Jewel */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "75px", opacity: 1 }}
                transition={{ duration: 1.0, delay: 1.3, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[#B49A65] to-transparent my-3 relative"
              >
                <motion.div
                  className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 border border-[#B49A65] bg-[#FAF7F0]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.3 }}
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.5 }}
                className="font-serif italic text-sm sm:text-base text-[#82786C] tracking-wide"
              >
                “A New Beginning, A New Blessing”
              </motion.p>
            </div>

            {/* Bottom: View Invitation Button & Tap to Open Caption */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="relative z-10 pb-8 sm:pb-10 w-full flex flex-col items-center"
            >
              <button
                id="view-invitation-btn"
                onClick={onOpen}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-[#FAF7F0] hover:bg-[#F3EBDD] text-[#3E342B] text-xs uppercase tracking-[0.25em] font-cinzel font-medium rounded-full border border-[#B49A65]/70 hover:border-[#B49A65] transition-all duration-300 shadow-sm hover:shadow-soft-gold active:scale-98 cursor-pointer"
                aria-label="View Invitation"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#B49A65]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">View Invitation</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B49A65] transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <span className="text-[10px] text-[#82786C]/70 font-sans tracking-widest uppercase mt-2.5">
                Tap to open
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

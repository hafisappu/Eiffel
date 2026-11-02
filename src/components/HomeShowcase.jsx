import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Camera } from 'lucide-react';
import { ArabesqueMedallion } from './DecorativeDividers';

export const HomeShowcase = () => {
  const [viewMode, setViewMode] = useState('sketch');

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center"
      >
        {/* Top Medallion */}
        <div className="mb-4">
          <ArabesqueMedallion className="w-9 h-9 text-[#B49A65]" />
        </div>

        {/* Section Label */}

        {/* Home Name Showcase Heading: Just EIFFEL */}
        <div className="relative mb-2">
          <h2 className="font-cursive text-6xl sm:text-8xl md:text-9xl text-[#3E342B] font-normal leading-tight tracking-wide py-1 select-none">
            Eiffel
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#82786C] max-w-md mx-auto mb-6 tracking-wide">
          “A New Beginning, A New Blessing”
        </p>

        {/* View Mode Toggle: Architectural Sketch vs Photograph */}
        <div className="inline-flex items-center p-1 bg-[#FAF7F0] border border-[#DDD0BB] rounded-full shadow-xs mb-6">
          <button
            type="button"
            onClick={() => setViewMode('sketch')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-cinzel tracking-wider transition-all duration-300 ${
              viewMode === 'sketch'
                ? 'bg-[#B49A65] text-[#FAF7F0] shadow-sm font-semibold'
                : 'text-[#82786C] hover:text-[#3E342B]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Architectural Sketch</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('photo')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-cinzel tracking-wider transition-all duration-300 ${
              viewMode === 'photo'
                ? 'bg-[#B49A65] text-[#FAF7F0] shadow-sm font-semibold'
                : 'text-[#82786C] hover:text-[#3E342B]'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Residence Photo</span>
          </button>
        </div>

        {/* Architectural Showcase Container */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Outer Frame with Delicate Border */}
          <div className="relative p-2.5 sm:p-3.5 bg-[#FAF7F0] border border-[#DDD0BB] rounded-[1.8rem] sm:rounded-[2.2rem] shadow-luxury overflow-hidden">

            {/* Display Canvas with AnimatePresence */}
            <div className="relative rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden border border-[#B49A65]/40 bg-[#FAF7F0] group aspect-[4/3]">
              <AnimatePresence mode="wait">
                {viewMode === 'sketch' ? (
                  <motion.div
                    key="sketch"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full"
                  >
                    {/* Hand-Drawn Engineering Elevation Sketch Image of Eiffel */}
                    <img
                      src="/images/eiffel-sketch.jpg"
                      alt="Eiffel Residence - Engineering Architectural Blueprint Elevation"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />

                    {/* Animated Golden Drafting Scan Line (Engineering Laser) */}
                    <motion.div
                      className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#B49A65] to-transparent pointer-events-none opacity-80"
                      animate={{
                        left: ['0%', '100%', '0%'],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Glow dot on scan line */}
                      <div className="absolute top-1/2 -left-[3px] w-2 h-2 rounded-full bg-[#B49A65] shadow-[0_0_8px_#B49A65]" />
                    </motion.div>

                    {/* Subtle Architectural Drafting Grid Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-15"
                      style={{
                        backgroundImage: `linear-gradient(to right, #B49A65 1px, transparent 1px),
                                          linear-gradient(to bottom, #B49A65 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }}
                    />

                    {/* Technical Engineering Corner Registration Marks */}
                    <div className="absolute top-3 left-3 text-[9px] font-mono text-[#82786C] bg-[#FAF7F0]/85 px-2 py-0.5 rounded border border-[#DDD0BB] tracking-widest uppercase">
                      ⊕ ELEV: 1:100 • 0.0M
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] font-mono text-[#82786C] bg-[#FAF7F0]/85 px-2 py-0.5 rounded border border-[#DDD0BB] tracking-widest uppercase">
                      <Compass className="w-3 h-3 text-[#B49A65] animate-spin" style={{ animationDuration: '24s' }} />
                      <span>NORTH 11.23°</span>
                    </div>

                    {/* Bottom Technical Title Block */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[#3E342B] pointer-events-none bg-[#FAF7F0]/90 backdrop-blur-xs border border-[#DDD0BB]/90 rounded-lg px-3 py-1.5 text-[10px] font-mono shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="font-semibold tracking-wider font-cinzel">
                          EIFFEL • NADUVANNUR
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#82786C]">
                        <span>DRG: EF-01</span>
                        <span>•</span>
                        <span>FRONT ELEVATION</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full"
                  >
                    {/* The Eiffel Residence Real Evening Photograph */}
                    <img
                      src="/images/eiffel-home.jpg"
                      alt="Eiffel Residence - Naduvannur"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="eager"
                    />

                    {/* Bottom Residence Title Block */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[#3E342B] pointer-events-none bg-[#FAF7F0]/90 backdrop-blur-xs border border-[#DDD0BB]/90 rounded-lg px-3 py-1.5 text-[10px] font-mono shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="font-semibold tracking-wider font-cinzel">
                          EIFFEL • NADUVANNUR
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#82786C]">
                        <span className="tracking-wider uppercase text-[9px] font-cinzel">Our Residence</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Architectural caption */}
            <div className="mt-3.5 text-center">
              <p className="font-serif text-sm italic text-[#82786C]">
                Built with love, faith, and cherished dreams
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

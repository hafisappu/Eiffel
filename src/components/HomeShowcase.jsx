import React from 'react';
import { motion } from 'framer-motion';
import { ArabesqueMedallion } from './DecorativeDividers';

export const HomeShowcase = () => {
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
        <p className="font-serif italic text-lg sm:text-2xl text-[#82786C] max-w-md mx-auto mb-8 tracking-wide">
          “A New Beginning, A New Blessing”
        </p>

        {/* Architectural Showcase Container */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Outer Frame with Delicate Border */}
          <div className="relative p-2.5 sm:p-3.5 bg-[#FAF7F0] border border-[#DDD0BB] rounded-[1.8rem] sm:rounded-[2.2rem] shadow-luxury overflow-hidden">

            {/* The Residence Display Canvas */}
            <div className="relative rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden border border-[#B49A65]/40 bg-[#FAF7F0] group">

              {/* The Eiffel Residence Photograph */}
              <img
                src="/images/eiffel-home.jpg"
                alt="Eiffel Residence - Naduvannur"
                className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
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

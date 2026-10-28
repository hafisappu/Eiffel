import React from 'react';
import { motion } from 'framer-motion';
import { ArabesqueMedallion, GoldDivider } from './DecorativeDividers';
import { RotateCcw } from 'lucide-react';

export const BestCompliments = ({ onReplay }) => {
  const compliments = [
    "Kadeeja Alikutty",
    "Rinshad T. K.",
    "Sargam Family"
  ];

  return (
    <footer className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-16 text-center">
      {/* Top delicate divider with subtle gold ornament */}
      <GoldDivider className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <ArabesqueMedallion className="w-8 h-8 text-[#B49A65] mb-3" />

        {/* Section Heading */}
        <span className="text-[11px] font-cinzel uppercase tracking-[0.3em] text-[#82786C] font-semibold mb-6">
          With Best Compliments From
        </span>

        {/* List of compliments */}
        <div className="space-y-2 mb-8">
          {compliments.map((name, index) => (
            <motion.p
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="font-serif text-xl sm:text-2xl text-[#3E342B] font-medium tracking-wide"
            >
              {name}
            </motion.p>
          ))}
        </div>

        {/* Subtle decorative line */}
        <div className="w-12 h-[1px] bg-[#DDD0BB] my-4" />

        {/* Closing Warm Message */}
        <p className="font-serif italic text-base sm:text-lg text-[#82786C] max-w-md mx-auto leading-relaxed px-4 mb-10">
          “We look forward to welcoming you and sharing this special occasion with you.”
        </p>

        {/* Replay Opening Control */}
        <div className="flex items-center justify-center mb-10">
          <button
            id="replay-opening-btn"
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF7F0] hover:bg-[#F3EBDD] text-[#3E342B] border border-[#DDD0BB] hover:border-[#B49A65] rounded-full text-xs font-cinzel uppercase tracking-wider transition-all shadow-xs active:scale-98 cursor-pointer"
            aria-label="Replay Opening Animation"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#B49A65]" />
            <span>Replay Opening</span>
          </button>
        </div>

        {/* Footer Credit & Trademark */}
        <div className="text-[11px] font-sans text-[#82786C]/70 tracking-widest uppercase">
          Eiffel • Naduvannur • 2026
        </div>
      </motion.div>
    </footer>
  );
};

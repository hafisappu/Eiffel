import React from 'react';
import { motion } from 'framer-motion';
import { Bismillah } from './Bismillah';
import { CornerOrnament, GoldDivider } from './DecorativeDividers';

export const InvitationCard = () => {
  return (
    <section className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 pt-10 pb-8">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#B49A65]/5 blur-2xl rounded-3xl pointer-events-none" />

      {/* Main Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#FAF7F0] border border-[#DDD0BB] rounded-2xl shadow-luxury p-7 sm:p-12 text-center overflow-hidden"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

        {/* Inner delicate double border */}
        <div className="absolute inset-3 sm:inset-4 border border-[#DDD0BB]/60 rounded-xl pointer-events-none" />

        {/* Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-right" />
        <CornerOrnament position="bottom-left" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Top Arabic Bismillah */}
          <div className="mb-6 sm:mb-8 pt-2">
            <Bismillah size="default" animate={false} />
          </div>

          {/* Invitation Intro Header */}
          <span className="text-[11px] sm:text-xs font-cinzel text-[#82786C] tracking-[0.3em] uppercase mb-5 font-semibold">
            Cordially Invites You
          </span>

          {/* All Three Names in the Same Elegant Cursive Script Font Style */}
          <div className="flex flex-col items-center space-y-1 sm:space-y-2 mb-6">
            <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#3E342B] font-normal leading-tight tracking-wide select-none">
              Mr. Muneer T. K.
            </h2>

            <div className="flex items-center justify-center gap-2 text-[#B49A65] py-0.5">
              <span className="h-[1px] w-6 bg-[#DDD0BB]" />
              <span className="text-sm font-serif italic text-[#82786C]">&amp;</span>
              <span className="h-[1px] w-6 bg-[#DDD0BB]" />
            </div>

            <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#3E342B] font-normal leading-tight tracking-wide select-none">
              Mrs. Hisana K. P.
            </h2>

            <div className="flex items-center justify-center gap-2 text-[#B49A65] py-0.5">
              <span className="h-[1px] w-6 bg-[#DDD0BB]" />
              <span className="text-sm font-serif italic text-[#82786C]">&amp;</span>
              <span className="h-[1px] w-6 bg-[#DDD0BB]" />
            </div>

            <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#3E342B] font-normal leading-tight tracking-wide select-none">
              Zahy Muneer
            </h2>
          </div>

          {/* Delicate Divider */}
          <GoldDivider className="my-3" />

          {/* Invitation Message */}
          <p className="font-serif text-lg sm:text-xl text-[#3E342B] leading-relaxed max-w-lg mx-auto font-normal italic px-2">
            “You are cordially invited with family to join us for the reception in connection with the housewarming ceremony of our new home.”
          </p>

          {/* Warm Note */}
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#82786C] mt-6 font-medium">
            Your gracious presence &amp; prayers are requested
          </p>
        </div>
      </motion.div>
    </section>
  );
};

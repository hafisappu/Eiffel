import React from 'react';
import { motion } from 'framer-motion';

export const Bismillah = ({ className = "", size = "default", animate = true }) => {
  const sizeClasses = {
    small: "text-sm sm:text-base",
    default: "text-base sm:text-lg md:text-xl",
    large: "text-xl sm:text-2xl",
  };

  const content = (
    <div className={`text-center select-none max-w-[230px] mx-auto px-1 ${className}`}>
      {/* Arabic Calligraphy text */}
      <p 
        className={`font-arabic text-[#3E342B] font-normal tracking-wide leading-relaxed transition-all drop-shadow-xs ${sizeClasses[size] || sizeClasses.default}`}
        dir="rtl"
        lang="ar"
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>

      {/* Delicate Gold Arabesque Accent Line */}
      <div className="flex items-center justify-center gap-1.5 mt-0.5">
        <span className="h-[0.75px] w-5 bg-gradient-to-r from-transparent to-[#B49A65]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#B49A65] bg-[#FAF7F0]" />
        <span className="h-[0.75px] w-5 bg-gradient-to-l from-transparent to-[#B49A65]" />
      </div>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      {content}
    </motion.div>
  );
};

import React from 'react';

export const GoldDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#DDD0BB] to-[#B49A65]" />
    <svg className="w-5 h-5 text-[#B49A65]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        strokeWidth="1"
        fill="#B49A65"
        fillOpacity="0.2"
      />
      <circle cx="12" cy="12" r="1.5" fill="#B49A65" />
    </svg>
    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#DDD0BB] to-[#B49A65]" />
  </div>
);

export const ArabesqueMedallion = ({ className = "w-10 h-10 text-[#B49A65]" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer 8-point geometric star */}
    <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(0 50 50)" opacity="0.6" />
    <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 50 50)" opacity="0.6" />
    
    {/* Concentric rings */}
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.8" />
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.7" />

    {/* Delicate floral tips */}
    <path d="M50 8 L53 18 L47 18 Z" fill="currentColor" opacity="0.7" />
    <path d="M50 92 L53 82 L47 82 Z" fill="currentColor" opacity="0.7" />
    <path d="M8 50 L18 53 L18 47 Z" fill="currentColor" opacity="0.7" />
    <path d="M92 50 L82 53 L82 47 Z" fill="currentColor" opacity="0.7" />
  </svg>
);

export const CornerOrnament = ({ position = "top-left" }) => {
  const rotationClasses = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };

  return (
    <div className={`absolute w-8 h-8 pointer-events-none text-[#B49A65]/70 ${rotationClasses[position]}`}>
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M0 0 L0 30 C0 15 15 0 30 0 L0 0 Z" fill="currentColor" opacity="0.15" />
        <path d="M2 38 L2 6 C2 3.8 3.8 2 6 2 L38 2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 26 L8 10 C8 8.9 8.9 8 10 8 L26 8" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2" opacity="0.8" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

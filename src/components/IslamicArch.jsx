import React from 'react';
import { motion } from 'framer-motion';

export const IslamicArchSVG = ({ className = "w-full h-full", animate = true }) => {
  return (
    <svg
      viewBox="0 0 440 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8D7546" />
          <stop offset="25%" stopColor="#B49A65" />
          <stop offset="50%" stopColor="#EADBBE" />
          <stop offset="75%" stopColor="#B49A65" />
          <stop offset="100%" stopColor="#8D7546" />
        </linearGradient>

        <linearGradient id="innerBgGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FAF7F0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F5EFE3" stopOpacity="0.9" />
        </linearGradient>

        <pattern id="archGridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.6" fill="#B49A65" fillOpacity="0.08" />
        </pattern>
      </defs>

      {/* Main Arch Interior Fill */}
      <path
        d="M 30,650 
           L 30,270 
           C 30,175 75,105 145,72 
           C 180,55 205,45 220,32 
           C 235,45 260,55 295,72 
           C 365,105 410,175 410,270 
           L 410,650 
           Z"
        fill="url(#innerBgGrad)"
      />

      {/* Subtle interior pattern */}
      <path
        d="M 30,650 
           L 30,270 
           C 30,175 75,105 145,72 
           C 180,55 205,45 220,32 
           C 235,45 260,55 295,72 
           C 365,105 410,175 410,270 
           L 410,650 
           Z"
        fill="url(#archGridPattern)"
      />

      {/* Outer Main Arch Outline (Golden Stroke) */}
      <motion.path
        d="M 30,650 
           L 30,270 
           C 30,175 75,105 145,72 
           C 180,55 205,45 220,32 
           C 235,45 260,55 295,72 
           C 365,105 410,175 410,270 
           L 410,650"
        stroke="url(#goldArchGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        animate={animate ? { pathLength: 1, opacity: 1 } : false}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />

      {/* Inner Delicate Dashed Arch Outline */}
      <motion.path
        d="M 44,642 
           L 44,275 
           C 44,185 85,120 150,90 
           C 183,75 206,64 220,50 
           C 234,64 257,75 290,90 
           C 355,120 396,185 396,275 
           L 396,642"
        stroke="#DDD0BB"
        strokeWidth="1"
        strokeDasharray="2.5 3"
        fill="none"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        animate={animate ? { pathLength: 1, opacity: 0.85 } : false}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />

      {/* Grounding Base Line and Plinth Details */}
      <motion.g
        initial={animate ? { opacity: 0, scaleX: 0 } : false}
        animate={animate ? { opacity: 1, scaleX: 1 } : false}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {/* Base horizontal ground line */}
        <line x1="20" y1="650" x2="420" y2="650" stroke="url(#goldArchGrad)" strokeWidth="1.5" />
        <line x1="12" y1="656" x2="428" y2="656" stroke="#DDD0BB" strokeWidth="1" />
        
        {/* Left plinth */}
        <rect x="24" y="644" width="12" height="6" fill="#FAF7F0" stroke="#B49A65" strokeWidth="1" />
        {/* Right plinth */}
        <rect x="404" y="644" width="12" height="6" fill="#FAF7F0" stroke="#B49A65" strokeWidth="1" />
      </motion.g>

      {/* Apex Finial Star & Jewel */}
      <motion.g
        initial={animate ? { scale: 0, opacity: 0 } : false}
        animate={animate ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <circle cx="220" cy="32" r="3" fill="#B49A65" />
        <circle cx="220" cy="22" r="1.8" fill="#8D7546" />
        <circle cx="220" cy="15" r="1" fill="#B49A65" />
      </motion.g>

      {/* Subtle Arch Shoulder Medallions */}
      <motion.g
        initial={animate ? { opacity: 0 } : false}
        animate={animate ? { opacity: 0.8 } : false}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <circle cx="30" cy="270" r="2.5" fill="#B49A65" />
        <circle cx="410" cy="270" r="2.5" fill="#B49A65" />
      </motion.g>
    </svg>
  );
};

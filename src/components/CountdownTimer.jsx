import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CountdownTimer = ({ targetDate = '2026-12-22T15:00:00+05:30' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-lg mx-auto my-8">
      <div className="text-center mb-4">
        <span className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-[#82786C] font-semibold">
          Counting Down To The Joyous Day
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-[#FAF7F0] border border-[#DDD0BB] rounded-xl shadow-sm relative overflow-hidden group hover:border-[#B49A65]/50 transition-colors"
          >
            {/* Top subtle highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B49A65]/40 to-transparent" />

            {/* Digit */}
            <motion.span
              key={block.value}
              initial={{ y: -5, opacity: 0.7 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-serif text-2xl sm:text-4xl text-[#3E342B] font-semibold tracking-tight"
            >
              {String(block.value).padStart(2, '0')}
            </motion.span>

            {/* Label */}
            <span className="text-[9px] sm:text-[11px] font-cinzel uppercase tracking-wider text-[#82786C] mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

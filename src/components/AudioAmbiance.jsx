import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioAmbiance = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Gentle pentatonic notes (Eiffel Home calm ambient scale: D4, F#4, A4, B4, D5)
  const notes = [293.66, 369.99, 440.00, 493.88, 587.33];

  const playChime = (ctx) => {
    if (!ctx || ctx.state === 'suspended') return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const note = notes[Math.floor(Math.random() * notes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, now);

      // Soft envelope for chime
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.3);
    } catch (e) {
      console.warn("Audio play issue", e);
    }
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);
      playChime(audioCtxRef.current);

      timerRef.current = setInterval(() => {
        playChime(audioCtxRef.current);
      }, 3400);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-40">
      <button
        id="audio-toggle-btn"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute peaceful ambiance" : "Play peaceful ambiance"}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF7F0]/90 hover:bg-[#FAF7F0] border border-[#DDD0BB] hover:border-[#B49A65] shadow-sm backdrop-blur-xs text-[#3E342B] transition-all duration-300 text-xs font-cinzel cursor-pointer group"
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-[2px] h-3.5 w-3 text-[#B49A65]">
              <span className="w-0.5 bg-[#B49A65] animate-soundwave-1" />
              <span className="w-0.5 bg-[#B49A65] animate-soundwave-2" />
              <span className="w-0.5 bg-[#B49A65] animate-soundwave-3" />
            </div>
            <span className="text-[10px] tracking-widest uppercase font-medium hidden sm:inline text-[#82786C]">
              Ambiance
            </span>
            <Volume2 className="w-3.5 h-3.5 text-[#B49A65]" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#82786C] group-hover:text-[#B49A65] transition-colors" />
            <span className="text-[10px] tracking-widest uppercase font-medium hidden sm:inline text-[#82786C]">
              Music
            </span>
          </>
        )}
      </button>
    </div>
  );
};

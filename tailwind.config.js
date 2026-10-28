/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eiffel: {
          bg: "#F3EBDD",         // Warm beige
          ivory: "#FAF7F0",      // Secondary ivory
          gold: "#B49A65",       // Accent muted gold
          'gold-light': "#D9C79F",
          'gold-dark': "#8D7546",
          'gold-glow': "#EADBBE",
          text: "#3E342B",       // Dark brown
          'text-muted': "#82786C", // Warm grey
          border: "#DDD0BB",     // Light beige border
          card: "#FAF7F0",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cursive: ['"Great Vibes"', '"Pinyon Script"', 'cursive'],
        script: ['"Great Vibes"', 'cursive'],
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-gold': '0 10px 30px -10px rgba(180, 154, 101, 0.15)',
        'luxury': '0 20px 40px -15px rgba(62, 52, 43, 0.08)',
        'card': '0 8px 30px rgba(62, 52, 43, 0.05)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}

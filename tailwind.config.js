/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        museo: ["MuseoModerno", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
        outfit: ["Outfit", "sans-serif"]
      },
      animation: {
        rotate: 'rotate 1s linear infinite',
        'border': 'border 4s linear infinite',
        'draw': 'drawPath 2s forwards',
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out',
          'bounce-slow': 'bounce-slow 3s infinite',
           marquee: 'marquee 25s linear infinite',
        },
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },

        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'border': {
          to: { '--border-angle': '360deg' },
        },
        drawPath: {
          'to': { 'stroke-dashoffset': '0' }
        }
      },

      dropShadow: {
        'dot-glow': '0 0 8px rgba(55, 0, 255, 0.7)',
        'moving-dot-glow': '0 0 10px rgba(55, 0, 255, 0.9)'
      }
    },
  },
  plugins: [],
}

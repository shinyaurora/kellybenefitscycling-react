/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09553F"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }   
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-paused': {
          'animation-play-state': 'paused',
        },
        '.animation-running': {
          'animation-play-state': 'running',
        },
      });
    },
  ],
}
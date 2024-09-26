/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transform-3d-1': {
          transform: 'rotateX(0deg) rotateY(40deg) translateZ(0px) ',
          'will-change': 'transform',
        },
        '.transform-3d-2': {
          transform: 'rotateX(0deg) rotateY(36deg) translateZ(10px) scale(1.1)',
          'will-change': 'transform',
        },
        '.perspective-500': {
          perspective: '500px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


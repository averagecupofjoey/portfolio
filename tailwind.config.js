/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // backgroundbase: '#283747',
        backgroundbase: '#0B1523',
        textbase: '#DFDFDE',
        // sectionbase: '#582240',
        sectionbase: '#DDB18F',
        badgebase: '#C2C8CC',
        largetextbase: '#D7D7D5',
        hoverbase: '#3E1C2D',
        navbase: '#596475',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};

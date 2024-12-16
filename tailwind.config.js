/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src`/**/*.{js,jsx,ts,tsx}",
    "./src/assets/fonts/**/*.{ttf,woff,woff2,eot,svg}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      KrankyRegular: ['KrankyRegular'],
      EmilysCandyRegular: ['EmilysCandyRegular'],
      TeXGyreAdventorBold: ['TeXGyreAdventorBold'],
    },
  },
  plugins: [require('daisyui')],
}


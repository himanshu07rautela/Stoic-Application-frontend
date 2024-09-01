// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000101',
        greenAccent: '#31c971',
        cyanAccent: '#06afcd',
        blueAccent: '#255cc8',
        vibrantBlue: '#1D4ED8', // Added vibrant blue color
      },
      fontFamily: {
        historical: ['Playfair Display', 'serif'],
        quoteFont: ['Lugrasimo', 'serif'], // Added this line for the quote box
      },
    },
  },
  plugins: [],
}

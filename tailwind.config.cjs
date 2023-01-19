/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['graphik', 'sans-serif'],
        lores: ['lores', 'sans-serif'],
      },
      colors: {
        'primary': '#18002e',
      }
    },
  },
  plugins: [],
}
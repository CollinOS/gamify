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
        // 'primary': '#18002e',
        // 'secondary': '#1d0a2e',
        'primary': '#16141C',
        'secondary': '#24212B',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
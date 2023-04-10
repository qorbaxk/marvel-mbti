/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#B3081F',
        },
        secondary: {
          100: '#F7F7F9',
          200: '#FFE8F5',
        },
        contentText: '#212121',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        tif: ['SBAggroB', 'sans-serif'],
      },
      maxWidth: {
        scr: '31.25rem',
      },
    },
  },
  plugins: [],
}

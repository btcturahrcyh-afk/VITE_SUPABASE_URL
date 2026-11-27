/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F0E6',
        cocoa: '#8A563B',
        milk: '#FFFDF8',
        latte: '#D6B99A',
        darkcocoa: '#39251D',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(57, 37, 29, 0.08)',
        elevated: '0 20px 45px -15px rgba(57, 37, 29, 0.14)',
      },
    },
  },
  plugins: [],
};

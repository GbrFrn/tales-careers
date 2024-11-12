/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
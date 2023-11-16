/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        'dark-gray': {
          light: '#212121',
          DEFAULT: '#101010'
        },
        'accent': '#F1CE6A'
      },
      fontSize: {
        'sec-heading': 'clamp(1.875rem, 5vw, 2.5rem)',
        'sec-subtitle': 'clamp(1rem, 2vw, 1.25rem)',
      },
      screens: {
        'xs': '480px'
      }
    }
  },
  plugins: []
};

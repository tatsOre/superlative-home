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
      screens: {
        'xs': '480px'
      }
    }
  },
  plugins: []
};

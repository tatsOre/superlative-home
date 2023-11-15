/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        sm: '50rem'
      }
    },
    extend: {
      colors: {
        'dark-gray': {
          light: '#212121',
          DEFAULT: '#101010'
        },
        'accent': '#F1CE6A'
      },
    }
  },
  plugins: []
};

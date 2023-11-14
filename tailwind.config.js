/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        sm: '50rem'
      }
    },
    extend: {
      background: {
        'primary-dark': '#121212',
        'primary-light': '#212121',
        'primary-accent': '#424242',
        'primary-accent-light': '#616161',
        'primary-accent-dark': '#303030',
        'primary-accent-transparent': 'rgba(66, 66, 66, 0.5)',
      },
    }
  },
  plugins: []
};

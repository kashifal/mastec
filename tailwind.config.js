/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#075EAD',
        yellowish:'#CED643'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
}
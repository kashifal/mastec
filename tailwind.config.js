/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#F99417",
        yellowish: "#F99417",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
  ],
};

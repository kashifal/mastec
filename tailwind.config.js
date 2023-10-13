/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#541690",
        yellowish: "#541690",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
  ],
};

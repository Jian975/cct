/* input.css */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        acme: ["acme"],
        YRDZST: ["YRDZST"],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
      colors: {
        "primary-green": "#417F56",
        "green-tint": "#e7f0e6",
        "light-black": "#353535",
      },
      width: {
        18: "70px",
        22: "90px",
      },
    },
  },
  plugins: [],
};

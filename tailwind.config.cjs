/** @type {import('tailwindcss').Config} */

// create own custom theme
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[700] },
        secondary: { ...colors.violet, DEFAULT: colors.violet[500] },
        accent: { ...colors.rose, DEFAULT: colors.rose[500] },
        "japan-black": "#241f19",
        "japan-green": "#959d90",
        "japan-nude": "#e7d7c9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

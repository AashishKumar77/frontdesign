/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#964B00",
        Amber: "#f59e0b",
        black: "#000000",
        yellow: "#FFFF00",
        white: " #FFFFFF",
        gray: "#f9fafb",
        red: "#ED1C24",
        Neutral: "#737373",
        oldlace: "#fdf5e6",
        red1: "#fef2f2",
        red3: "#FFF9F9",
        green: " #00FF00",
        offwhite: "#F5F5F5",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        others: { min: "340px", max: "1200px" },
      },
      colors: {
        darkBG: "#1E293B",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: {
    relative: true,
    files: [
      "./src/App.{js,jsx,ts,tsx}",
      "./src/screens/**/*.{js,jsx,ts,tsx}",
      "./src/navigation/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-grey": "#E6E6E6",
        grey: "#BCB8B1",
        "dark-grey": "#8A817C",
        black: "#39393A",
        primary: {
          DEFAULT: "#FF7132",
          50: "#FFF0EA",
          100: "#FFE2D5",
          200: "#FFC6AC",
          300: "#FFAA84",
          400: "#FF8D5B",
          500: "#FF7132",
          600: "#F94C00",
          700: "#C13B00",
          800: "#892A00",
          900: "#511900",
        },
        secondary: "#FF8552",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
module.exports = {
  url: ["../public"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    willChange: {
      "bg-white": "bg-transparent",
    },
    extend: {
      colors: {
        "azul-ap": "#0271b6",
        "sol-ap": "#FFBF33",
        "gris-ap": "#E2E8F0",
      },
      maxHeight: {
        500: "500px",
      },
      maxWidth: {
        600: "600px",
      },
      scale: {
        "-100": "-1",
      },
      height: {
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        600: "600px",
        500: "500px",
      },
      width: {
        100: "100px",
        400: "400px",
        600: "600px",
      },
      dropShadow: {
        "3xl": "0 10px 35px rgb(2, 113,182)",
        xl: "0 10px 10px rgb(2, 113,182)",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/1.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("@tailwindcss/forms")],
};

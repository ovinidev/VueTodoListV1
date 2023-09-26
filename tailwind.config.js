/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#8257E6",
      },
    },
    screens: {
      xsm: "500px",
    },
  },
  plugins: [],
};

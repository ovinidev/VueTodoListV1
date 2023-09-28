import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#8257E6",
      },
    },
    screens: {
      xsm: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;

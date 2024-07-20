import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        5: "5",
        100: "100",
        1000: "1000",
      },
      minHeight: {
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "800px",
        1000: "1000px",
      },
      maxWidth: {
        200: "200px",
        250: "250px",
        300: "300px",
        container: "1240px",
      },
      colors: {
        primary: "#0B60B0",
        secondary: "#2f4067",
        light: "#F6F1F1",
        dark: "#262e40",
      },
    },
  },
  plugins: [],
};
export default config;

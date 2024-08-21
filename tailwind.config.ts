import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0b0b0b",
        blackSecond: "#202121",
        white: "#ebebeb",
        whiteSecond: "#e3e3e3",
        mainGreen: "#38b000",
        mainGreenSecond: "#319a00"
      },
    },
  },
  plugins: [],
};
export default config;

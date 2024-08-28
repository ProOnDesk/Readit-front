import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#0b0b0b",
        blackSecond: "#202121",
        // white: "#ebebeb",
        // whiteSecond: "#e3e3e3",
        whiteSecond: "#ebebeb",
        mainGreen: "#9ef01a",
        mainGreenSecond: "#70e000",
      },
      screens: {
        sm400: "400px",
        sm500: "500px",
        sm600: "600px",
        md800: "800px",
        md900: "900px",
        lg1100: "1100px",
        lg1200: "1200px",
        "2xl": "1400px",
        "3xl": "1500px",
        "4xl": "1600px",
        "5xl": "1700px",
        "6xl": "1800px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

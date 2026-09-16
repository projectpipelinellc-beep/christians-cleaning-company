import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mist: {
          DEFAULT: "#F5F7F6",
          deep: "#EAF0ED",
        },
        slate: {
          DEFAULT: "#1E3336",
          light: "#2C4A4E",
          dark: "#132224",
        },
        haze: {
          DEFAULT: "#DCE8E4",
          light: "#EEF3F1",
          dark: "#B7CBC5",
        },
        coral: {
          DEFAULT: "#A64526",
          light: "#D9603B",
          dark: "#8A3820",
        },
        charcoal: {
          DEFAULT: "#212927",
          soft: "#4C5654",
        },
        gold: {
          DEFAULT: "#B08D57",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(30, 51, 54, 0.06)",
        card: "0 2px 16px rgba(30, 51, 54, 0.1)",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;

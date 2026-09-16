import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FBF8F2",
          deep: "#F3EEE3",
        },
        forest: {
          DEFAULT: "#22362B",
          light: "#2F4638",
          dark: "#182620",
        },
        sage: {
          DEFAULT: "#DCE3D4",
          light: "#EBEFE4",
          dark: "#B9C6AD",
        },
        charcoal: {
          DEFAULT: "#2B2A26",
          soft: "#54524C",
        },
        gold: {
          DEFAULT: "#B08D57",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
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
        subtle: "0 1px 2px rgba(34, 54, 43, 0.06)",
        card: "0 2px 12px rgba(34, 54, 43, 0.08)",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;

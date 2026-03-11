import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1152px",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        "background-light": "rgb(var(--background-light) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        "card-light": "rgb(var(--card-light) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "nav-black": "rgb(var(--secondary) / <alpha-value>)",
      },
      boxShadow: {
        brutal: "8px 8px 0 0 rgb(var(--shadow-strong))",
        "brutal-lg": "12px 12px 0 0 rgb(var(--shadow-strong))",
        "brutal-soft": "6px 6px 0 0 rgb(var(--shadow-soft))",
      },
    },
  },
  plugins: [],
};
export default config;

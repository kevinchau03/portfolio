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
        'primary': '#000080',
        'secondary': '#1e1e2a',
        'background': '#000000',
        'nav-black': '#1e1e2a',
        'accent': '#5B88B2',
        'card': 'oklch(21% 0.006 285.885)',
        'muted': '#64748b'
      },
    },
  },
  plugins: [],
};
export default config;

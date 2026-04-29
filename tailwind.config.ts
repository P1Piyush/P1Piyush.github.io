import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#111111",
        surface2: "#161616",
        border: "#222222",
        accent: "#2563eb",
        "text-primary": "#f0f0f0",
        "text-muted": "#666666",
        "tag-bg": "#1a1a1a",
        "tag-border": "rgba(37,99,235,0.2)",
        "tag-text": "#60a5fa",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Geist Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

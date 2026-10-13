import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 40px rgba(15, 23, 42, 0.05), 0 2px 8px rgba(15, 23, 42, 0.04)",
        lift: "0 24px 56px -16px rgba(15, 23, 42, 0.14), 0 12px 28px -10px rgba(37, 99, 235, 0.12)",
        card: "0 16px 40px -12px rgba(15, 23, 42, 0.1)",
        glow: "0 0 0 1px rgba(56, 189, 248, 0.2), 0 8px 32px rgba(37, 99, 235, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

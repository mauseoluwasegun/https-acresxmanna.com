/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "rgb(var(--cream-50) / <alpha-value>)",
          100: "rgb(var(--cream-100) / <alpha-value>)",
        },
        terracotta: {
          500: "rgb(var(--terracotta-500) / <alpha-value>)",
          600: "rgb(var(--terracotta-600) / <alpha-value>)",
          700: "rgb(var(--terracotta-700) / <alpha-value>)",
        },
        mango: {
          400: "rgb(var(--mango-400) / <alpha-value>)",
          500: "rgb(var(--mango-500) / <alpha-value>)",
        },
        earth: {
          600: "rgb(var(--earth-600) / <alpha-value>)",
        },
        forest: {
          600: "rgb(var(--forest-600) / <alpha-value>)",
          700: "rgb(var(--forest-700) / <alpha-value>)",
        },
        indigo: {
          700: "rgb(var(--indigo-700) / <alpha-value>)",
        },
        charcoal: {
          700: "rgb(var(--charcoal-700) / <alpha-value>)",
          900: "rgb(var(--charcoal-900) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-hero": [
          "clamp(3.5rem, 9vw, 7.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-1": [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "1", letterSpacing: "-0.015em" },
        ],
        "display-2": [
          "clamp(1.8rem, 4vw, 3rem)",
          { lineHeight: "1.05", letterSpacing: "-0.01em" },
        ],
        "heading-1": [
          "clamp(1.4rem, 2.5vw, 2rem)",
          { lineHeight: "1.15" },
        ],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        label: [
          "0.875rem",
          { lineHeight: "1.3", letterSpacing: "0.12em" },
        ],
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      borderRadius: {
        soft: "14px",
        "soft-lg": "22px",
      },
      boxShadow: {
        cta: "0 10px 30px -12px rgb(var(--terracotta-500) / 0.4)",
        "cta-hover": "0 18px 44px -10px rgb(var(--terracotta-500) / 0.55)",
        card: "0 6px 20px -10px rgb(26 26 26 / 0.18)",
        "card-hover": "0 24px 50px -20px rgb(26 26 26 / 0.35)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "spring-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(12px, -8px) scale(1.05)" },
        },
        "pattern-flow": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
        "blob-drift": "blob-drift 12s ease-in-out infinite",
        "pattern-flow": "pattern-flow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

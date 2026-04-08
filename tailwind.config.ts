import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        "background-deep": "rgb(var(--background-deep) / <alpha-value>)",
        "background-elevated":
          "rgb(var(--background-elevated) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "foreground-strong": "rgb(var(--foreground-strong) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        "card-strong": "rgb(var(--card-strong) / <alpha-value>)",
        "card-foreground": "rgb(var(--card-foreground) / <alpha-value>)",
        popover: "rgb(var(--popover) / <alpha-value>)",
        "popover-foreground":
          "rgb(var(--popover-foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "border-strong": "rgb(var(--border-strong) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "rgb(var(--secondary-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground":
          "rgb(var(--accent-foreground) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        navbar: "rgb(var(--navbar) / <alpha-value>)",
        "navbar-border": "rgb(var(--navbar-border) / <alpha-value>)",
        hero: {
          glow: "rgb(var(--hero-glow-primary) / <alpha-value>)",
          secondary: "rgb(var(--hero-glow-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--hero-glow-tertiary) / <alpha-value>)",
        },
        gradient: {
          start: "rgb(var(--gradient-start) / <alpha-value>)",
          mid: "rgb(var(--gradient-mid) / <alpha-value>)",
          end: "rgb(var(--gradient-end) / <alpha-value>)",
        },
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
      },
      backgroundImage: {
        "button-primary":
          "linear-gradient(135deg, rgb(var(--gradient-start)), rgb(var(--gradient-mid)) 54%, rgb(var(--gradient-end)))",
        "button-secondary":
          "linear-gradient(180deg, rgb(var(--card) / 0.82), rgb(var(--card-strong) / 0.92))",
        "panel-sheen":
          "linear-gradient(180deg, rgb(var(--card) / 0.86), rgb(var(--card-strong) / 0.96))",
        "hero-aurora":
          "radial-gradient(circle at 50% 12%, rgb(var(--hero-glow-primary) / 0.16), transparent 22%), radial-gradient(circle at 86% 18%, rgb(var(--hero-glow-secondary) / 0.18), transparent 18%), radial-gradient(circle at 82% 6%, rgb(var(--hero-glow-tertiary) / 0.22), transparent 14%), linear-gradient(180deg, rgb(var(--background-elevated)) 0%, rgb(var(--background)) 48%, rgb(var(--background-deep)) 100%)",
        "section-radial":
          "radial-gradient(circle at 18% 16%, rgb(var(--hero-glow-primary) / 0.12), transparent 26%), radial-gradient(circle at 84% 18%, rgb(var(--hero-glow-secondary) / 0.10), transparent 20%), linear-gradient(180deg, rgb(var(--card) / 0.72), rgb(var(--card-strong) / 0.9))",
      },
      boxShadow: {
        panel:
          "0 22px 80px rgba(2, 6, 23, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        glow:
          "0 18px 60px rgba(115, 76, 255, 0.28), 0 0 0 1px rgba(176, 132, 255, 0.18)",
        "glow-soft":
          "0 26px 70px rgba(115, 76, 255, 0.22), 0 0 0 1px rgba(176, 132, 255, 0.12)",
        hero: "0 36px 120px rgba(2, 6, 23, 0.38)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "var(--font-geist-sans)"],
      },
    },
  },
} satisfies Config;

export default config;

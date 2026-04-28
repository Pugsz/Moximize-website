import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* shadcn CSS-variable tokens — hex values, no hsl() wrapper needed */
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        /* Moximize brand tokens — logo blues */
        ink: "#0A0D18",
        "ink-2": "#141829",
        "ink-3": "#1E2438",
        mox: "#29ABE2",        /* logo light cyan-blue / primary */
        "mox-h": "#1A9DD8",    /* darker on hover */
        "mox-dark": "#2B4EA0", /* logo dark blue */
        "mox-surface": "#061622",
        "mox-surface-2": "#0d1f3c",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
        mono: ["Menlo", "monospace"],
        serif: ["Georgia", "serif"],
        /* keep syne alias so existing font-syne classes don't break */
        syne: ["var(--font-open-sans)", "Open Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;

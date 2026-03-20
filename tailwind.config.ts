import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",

        primary: "hsl(var--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--acent))",

        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
        },
        muted: "hsl(var(--muted))",
      },
    },
  },
  plugins: [],
} satisfies Config;

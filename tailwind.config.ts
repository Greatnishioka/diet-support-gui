import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        noto: ['"Noto Sans JP"', 'sans-serif'],
        literata:["'Literata'", 'serif'],
        archivo: ['"Archivo Black"', 'serif'],
      },
      lineHeight: {
        tighter: '0.9',
      },
    },
  },
  plugins: [],
} satisfies Config;

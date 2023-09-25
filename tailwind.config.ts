import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFCF7",
          100: "#FFFBF5",
          200: "#FFF9F0",
          300: "#FFF7EC",
          400: "#FFF6E9",
          500: "#FFF4E5",
          600: "#FFF2E1",
          700: "#FFF1DE",
          800: "#FFEFDA",
          900: "#FFEDD6",
          950: "#FFEBD3",
        },
        secondary: {
          950: "#08090E",
          900: "#0B0D14",
          800: "#0E101A",
          700: "#111420",
          600: "#141826",
          500: "#171C2C",
          400: "#1A2032",
          300: "#1D2438",
          200: "#20283E",
          100: "#232C44",
          50: "#26304A",
        },
        accent: {
          950: "#F0BC57",
          900: "#F1BF65",
          800: "#F3C97D",
          700: "#F4CC8B",
          600: "#F6D0A3",
          500: "#F7D3B1",
          400: "#F8D6BF",
          300: "#FADACD",
          200: "#FBDDD5",
          100: "#FCE0E4",
          50: "#FDF3F2",
        },
      },
    },
  },
  plugins: [],
}
export default config

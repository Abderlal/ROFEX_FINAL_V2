import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        gray: {
          ...defaultTheme.colors.gray,
          200: "#e5e7eb", // ✅ safe
        },
        border: "#e5e7eb"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

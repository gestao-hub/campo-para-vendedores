import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        field: {
          50: "#F8FAF7",
          100: "#EAF3E6",
          500: "#15803D",
          700: "#14532D",
          900: "#052E16"
        },
        scoreboard: "#FACC15",
        ink: "#111827"
      },
      boxShadow: {
        field: "0 20px 60px rgba(5, 46, 22, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;

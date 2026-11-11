/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#111111",
        border: "#2A2A2A",
        gold: "#C8A96E",
        "gold-light": "#E2C98A",
        "text-primary": "#F0EDE8",
        "text-muted": "#8A8580",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};

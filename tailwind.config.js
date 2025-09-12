module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  colors: {
        primary: "#F38C05",
        primary_light: "#FFB547",
        primary_dark: "#dd8006ff",
        secondary: "#054B2F",
        secondary_light: "#099f63ff",
        secondary_dark: "#1C4A3F",
        highlight: "#E8F7F0",
        text: {
          primary: "#0F1724",
          secondary: "#403D39",
        },
  },
  },
  plugins: [],
};

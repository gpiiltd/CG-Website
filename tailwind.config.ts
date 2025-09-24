/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Outfit', "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      body: ['Outfit', "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      foundation_blue: '#170C3D',
      foundation_orange: '#ED6C30',
      body_text: '#3E3E41',
      black: '#3E3E41',
    },
  },
},

  plugins: [],
}

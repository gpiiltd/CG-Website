/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
      },
      colors: {
        foundation_blue: '#170C3D',
        body_text: '#3E3E41',
        foundation_orange: '#ED6C30',
      },
    },
  },
  plugins: [],
}

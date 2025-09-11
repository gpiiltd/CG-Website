/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
      },
      colors: {
        Foundation_Blue: '#170C3D',
        Body_text: '#3E3E41',
        Foundation_Orange: '#ED6C30',
      },
    },
  },
  plugins: [],
};

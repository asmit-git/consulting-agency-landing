/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#084750",
         
        },
        secondary:{
          DEFAULT:"#fa5454",
        },
        background:{
          DEFAULT: "#fbfaf6"
        }
      },
    },
  },
  plugins: [],
}

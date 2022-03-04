const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    color: {
      'near-white': '#F8EEE4',
    },
    extend: {
      fontFamily: {

      }
    },
  },
  plugins: [],
}
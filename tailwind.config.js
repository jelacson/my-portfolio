module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      vermillion: "#e34234",
      black: "#000000",
      white: "#ffffff",
      darkpurple: "#140f2d",
      reminders: "#ff9502"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
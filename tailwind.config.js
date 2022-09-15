/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gcash-blue': '#007cff',
        'gcash-blue-dark': '#002cb8',
        'gcash-secondary-blue': '#6fbaf7'
      }
    },
  },
  plugins: [],
}

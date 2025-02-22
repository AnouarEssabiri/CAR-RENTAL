/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      margin: {
        'listCar': 'calc(100% - 67px)',
      },
    },
  },
  plugins: [],
}

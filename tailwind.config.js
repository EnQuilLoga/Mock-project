/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'submenu-md': '500px',
        'submenu-lg': '700px',
        'submenu-xl': '900px',
      }
    },
  },
  plugins: [],
}


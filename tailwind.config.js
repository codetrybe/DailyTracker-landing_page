/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        'dtSkyBlue': '#007AFF',
        'dtDarkBlue': '#0E1133',
        'dtgraybg': '#505056'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


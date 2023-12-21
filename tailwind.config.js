/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        'dtSkyBlue': '#007AFF',
        'dtDarkBlue': '#0E1133',
        'dtgraybg': '#505056',
        'blue':'#0000FF',
        'gold':' #FFDF00'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },

      screen: {
        'ipad':'768'
      },
    },
  },
  plugins: [],
}


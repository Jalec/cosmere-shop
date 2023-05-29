/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'rowdies': ['Rowdies', 'cursive'],
      }
    },
  },
  plugins: [],
}


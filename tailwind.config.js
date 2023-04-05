/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        babyBlue: '#B0E0E6',
        blushPink: '#FFC0CB',
        mintGreen: '#98FB98',
        lavender: '#E6E6FA'
      }
    },
  },
  plugins: [],
}

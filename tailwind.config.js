/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lm: '769px',
      lg: '1020px',
      lgm: '1050px',
      lgg: '1051px',
      lgxl: '1440px',
      xl: '1440px',
      xll: '1441px',
      
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

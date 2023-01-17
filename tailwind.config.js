/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#E7F5FE",
          100: "#D4EDFC",
          200: "#A3D9FA",
          300: "#78C6F7",
          400: "#48B2F4",
          500: "#1DA1F2",
          600: "#0C81CB",
          700: "#09639A",
          800: "#064165",
          900: "#032235"
        },
        darkblue: {
          50: "#E1E8EF",
          100: "#C3D1DF",
          200: "#8AA6C1",
          300: "#53789D",
          400: "#334A61",
          500: "#141D26",
          600: "#10171E",
          700: "#0C1217",
          800: "#090D11",
          900: "#040507"
        }
      }
    },
  },
  plugins: [],
}

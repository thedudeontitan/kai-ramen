/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'hiro-misake' : ['Hiro Misake', 'sans-serif'], 
      }
  },
  },
  plugins: [],
}


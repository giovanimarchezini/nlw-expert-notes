/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['inter','sans-serif']
      }
    },
  },
  plugins: [],
}


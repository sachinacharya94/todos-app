/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green1:'#16a3b7',
         green2:'#40a3b9',
         grey1:'#c7c7c7',
         red1:'#db3345'
      }
    },
  },
  plugins: [],
}


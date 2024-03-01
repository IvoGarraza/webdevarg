/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat", sans-serif'],
      },
      colors:{
        primario:'#FFD60A',
        secundario:'#FFC300',
        terciario:'#003566',
        cuarto:'#001D3D',
        quinto:'#000814'
      },
      animation:{
        'bounce-slow':'bounce 6s infinite'
      },
    },
  },
  plugins: [],
}


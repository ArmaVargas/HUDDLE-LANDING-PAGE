/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{

        'Pink': 'hsl(322, 100%, 66%)',
        'VeryPaleCyan':' hsl(193, 100%, 96%)',
        'VeryDarkCyan': 'hsl(192, 100%, 9%)',
        'GrayishBlue': 'hsl(208, 11%, 55%)'
      
      },

      fontFamily:{
        'poppins-h' : ["Poppins", 'sans-serif'],
        'open-sans-body': ["Open Sans", 'sans-serif']

      },
      backgroundImage:{
        'fondo-D': "url('./images/bg-hero-desktop.svg')",
        'fondo-M': "url('./images/bg-hero-mobile.svg')",
      },
      
      boxShadow:{
        '3xa': '-2px 0px 20px -5px rgba(0,0,0,0.18)'
      },

    },
  },
  plugins: [],
}
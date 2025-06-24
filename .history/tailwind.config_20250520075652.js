/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {

      fontFamily: {
        sans: ['Inter', 'sans-serif'], // replaces default sans
      },
      screens: {
        sm: '640px',
        // other breakpoints...
      },
  
    },


  },
  plugins: [
    require('daisyui'),
  ],

}


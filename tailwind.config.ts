/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
  
        'md': {'min': '768px', 'max': '1023px'},
  
        'lg': {'min': '1024px', 'max': '1279px'},
  
        'xl': {'min': '1280px'},
  
        '2xl': {'min': '1536px'},
    
        'custom': {'min': '0' , 'max': '834px'},

        'custom-2': {'min': '0' , 'max': '580px'},
      },
      fontWeight: {
        '900': 900,
      },
      fontSize: {
        '35': '3.5rem',
        '30': '3rem', 
        '22': '2.2rem',
      },
      colors: {
        "black-100": "#2B2C35",
        "orange": "#DA722C",
        'button': '#023047',
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
        "hero-bg-2": "linear-gradient(180deg, #6F7DFB 0%, #26308C 100%)",
      }
    },
  },
  plugins: [],
};
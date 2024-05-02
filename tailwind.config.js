/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Oswald", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
        bungee: ["Bungee Spice", "sans-serif"],
        permanent: ["Permanent Marker, sans-serif"]
      },
      boxShadow: {
        '3xl': '0px 4px 8px 2px rgba(0, 0, 0, 0.5)',
        'teste': 'inset 2px 5px 10px rgb(5, 5, 5)',
      },
      screens: {
        'perso': '200px',
      },
      keyframes: {
        smooth: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        smooth: 'smooth 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
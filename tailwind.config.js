/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: {
          DEFAULT: '#7FAF2C',
          dark: '#689222',
          light: '#94c839',
        },
        brandLime: {
          DEFAULT: '#C8D92B',
          dark: '#b2c222',
          light: '#d6e643',
        },
        brandMagenta: {
          DEFAULT: '#C5006B',
          dark: '#a10056',
          light: '#e01c84',
        },
        brandDark: '#2D2D2D',
        brandLight: '#F5F5F5',
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(45, 45, 45, 0.6)',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 15px rgba(127, 175, 44, 0.35)',
        'glow-lime': '0 0 15px rgba(200, 217, 43, 0.35)',
        'glow-magenta': '0 0 15px rgba(197, 0, 107, 0.35)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

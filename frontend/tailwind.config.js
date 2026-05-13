/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        literary: {
          50: '#fdfbf7',
          100: '#f8f4eb',
          200: '#ede3d1',
          300: '#dfcdb1',
          400: '#cbb08a',
          500: '#b89467',
          600: '#a37b54',
          700: '#866145',
          800: '#6f513d',
          900: '#5a4334',
        },
        ink: {
          DEFAULT: '#1c1917', // warm dark stone
          light: '#292524',
          muted: '#57534e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

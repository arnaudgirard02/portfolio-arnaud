/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // <--- C'est cette ligne qui corrige le warning
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Et celle-ci
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
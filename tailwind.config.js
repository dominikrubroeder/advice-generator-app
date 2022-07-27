/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-cyan-light': 'hsl(193, 38%, 86%)',
        'app-primary-green-neon': 'hsl(150, 100%, 66%)',
        'app-neutral-blue-grayish': 'hsl(217, 19%, 38%)',
        'app-neutral-blue-grayish-dark': 'hsl(217, 19%, 24%)',
        'app-neutral-blue-dark': 'hsl(218, 23%, 16%)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        scale: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: 1,
            visibility: 'visible',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
        scale: 'scale .4s ease-out forwards',
      },
    },
  },
  plugins: [],
};

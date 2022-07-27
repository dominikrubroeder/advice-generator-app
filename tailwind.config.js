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
    },
  },
  plugins: [],
};

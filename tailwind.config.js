/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        primaryLight: '#473b33',
        secondary: 'var(--clr-secondary)',
        white: 'var(--clr-white)',
        black: 'var(--clr-black)',
        pumpkin: 'var(--clr-pumpkin)',
        silver: 'var(--clr-silver)',
        silverV1: 'var(--clr-silver-v1)',
        scarlet: 'var(--clr-scarlet)',
        scarletV1: 'var(--clr-scarlet-v1)',
        green: 'var(--clr-green)',
        yellow: 'var(--clr-yellow)',
        jet: 'var(--clr-jet)',
        peach: 'var(--clr-peach)',
      },
      fontFamily: {
        bai: ['"Bai Jamjuree"', 'sans-serif'],
      },
      transitionTimingFunction: {
        default: 'var(--transition-default)',
      },
    },
  },
  plugins: [],
}




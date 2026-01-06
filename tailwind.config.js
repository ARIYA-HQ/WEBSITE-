/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#D0771E", // Main Brand Color
          100: "#fbeee6", // Light Backgrounds
        },
        beige: {
          100: "#f3f0eb", // Main Page Background
          50: "#fbfaf8",  // Card Backgrounds
        },
        navy: {
          primary: "#1D2939", // Deep contrast
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'premium': '40px',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

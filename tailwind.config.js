/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8D57E',
        secondary: '#BFAFF2',
        gray: {
          DEFAULT: '#808080',
          light: '#555555',
        },
        white: '#ffffff',     // for text color
      },
    },
  },
  plugins: [],
}

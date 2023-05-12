/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme configuration goes here
      colors: {
        // Example of customizing colors
        primary: '#1A45B0',
        secondary: "#00d564"
      },
      fontFamily: {
        // Example of customizing fonts
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
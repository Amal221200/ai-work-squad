/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx,js,ts}'],
  theme: {
    extend: {
      colors: {
        ["primary-600"]: "#0095A9FF",
        ["primary-100"]: "#EBFDFFFF",
        secondary: "#8191C9FF"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-rgba': 'rgba(17, 17, 17, 0.25'
      }
    },
  },
  plugins: [],
}


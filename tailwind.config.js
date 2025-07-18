/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "jetBrains" : "'JetBrains Mono', monospace",
      "lato" : "'Lato', sans-serif"
    },
    extend: {},
  },
  plugins: [],
}


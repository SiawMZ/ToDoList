/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: {
      colors: {
        'mz_yellow': '#FCFBE3',
        'mz_green': '#D0CCBE',
      },
    },
  },
  plugins: [require("daisyui")],
}


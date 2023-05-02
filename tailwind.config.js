/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


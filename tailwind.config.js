/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#e0b0ff",  
        "secondary": "#9575aa",
        "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


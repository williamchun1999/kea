/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {

    themes: [
      {
        mytheme: {
        
        "primary": "#e0b0ff",
                
        "secondary": "#4b3b55",
                
        "accent": "#e0b0ff",
                
        "neutral": "#f0d8ff",
                
        "base-100": "#FFFFFF",
                
        "info": "#f9efff",
                
        "success": "#fcf7ff",
                
        "warning": "#FBBD23",
                
        "error": "#F87272",

        "hover": "#9d7bb3"
        },
      },

    ],
  },
  plugins: [require("daisyui")]
}


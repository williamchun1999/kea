import { loadConfigFromFile } from 'vite'

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
        
"accent": "#9575aa",
        
"neutral": "#F1EEF1",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#cfffb0",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


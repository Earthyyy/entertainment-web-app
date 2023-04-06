/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: '#FC4747',
      secondary: '#10141E',
      accent: '#5A698F',
      neutral: '#161D2F',
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


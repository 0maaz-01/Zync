import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
      },
      screens: {
        ...defaultTheme.screens, // ⬅️ brings back sm, md, lg, xl, 2xl
        'xxs': '350px',
        'xs': '450px',
        'lx': '1120px',
        'ml' : "840px"
      },
      boxShadow: {
        'button': '0 0px 15px rgba(136, 14, 79, 1)',   // 'button': '0 0px 20px rgba(136, 14, 79, 1)',
        '3xl': '0 0px 40px rgba(136, 14, 79, 1)',
        'bar':'0 0px 10px rgba(136, 14, 79, 1)',
        'screen': '0 0px 20px rgba(136, 14, 79, 1)',
        'confirm': '0 0px 20px rgba(234, 179, 8, 1)',
        'recording': "0 0px 60px rgba(234, 179, 8, 1)"
      },
    },
  },
  plugins: [],
};

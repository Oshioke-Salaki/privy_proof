/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primaryColor: "#00B1FF",
        overlayColor: "rgba(58, 58, 58, 0.50)",
        blackLight: "#3A3A3A",
        secondaryColor: "#FAFDFF",
        lightBlue: "rgba(0, 177, 255, 0.02)",
        lightGrey: "rgba(58, 58, 58, 0.60)",
      },
      boxShadow: {
        primaryShadow: "0px 0px 4px 0px rgba(255, 255, 255, 0.25)",
        secondaryShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",
      },
      lineHeight: {
        default: "25px",
      },
    },
  },
  plugins: [],
};

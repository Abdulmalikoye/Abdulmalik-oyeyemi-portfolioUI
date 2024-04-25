/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1152px",
      },
      colors: {
        primary: "#FF6464",
        background: "#EDF7FA",
        dark: "#21243D",
        secondary: "#00A8CC",
      },
      fontFamily: {
        heebo: ["Heebo, sans-serif"],
      },
    },
  },
  plugins: [],
};

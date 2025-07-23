/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        'coffee': {
          50: "#E8D6D0",
          200: "#C89f94",
          400: "#A25F4B",
          600: "#744838",
        }
      },
      keyframes: {
        sliderDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        sliderDown: "sliderDown 0.4s ease-in-out"
      },
      backgroundImage: {
        'slider-bg': "url('./images/slider-coffee.jpg')"
      }
    }
  },
  plugins: []
};

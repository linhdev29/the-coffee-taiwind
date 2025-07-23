/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        "light-coffee": "#c89f94"
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

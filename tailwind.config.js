/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89f94",
          400: "#A25F4B",
          600: "#744838"
        }
      },
      keyframes: {
        sliderDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        sliderDown: "sliderDown 0.5s ease-in-out",
        fadeIn: "fadeIn 0.3s ease-in-out"
      },
      backgroundImage: {
        "slider-bg": "url('./images/slider-coffee.jpg')",
        ...Object.fromEntries(
          Array.from({ length: 9 }, (_, i) => [
            `product-bg-${i + 1}`,
            `url('./images/feat-mug-${i + 1}.jpg')`
          ])
        )
      }
    }
  },
  plugins: []
};

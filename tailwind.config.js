/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./src/components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors:{
      // background:"#252B48",
      // customGradient: "linear-gradient-to( #E19898 30%, #3F1D38 70%)",
    }
  },
  },
  plugins: [],
}


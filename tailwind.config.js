/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mm: "320px", // 'min-width
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-gray": "#EEEDEC",
        "custom-button": "#043C6B",
        "cutom-gray-strong": "#D9D9D9",
      },
      minHeight: {
        "height-full-96px": "calc(100vh - 96px)",
      },
      height: {
        "height-full-96px": "calc(100vh - 96px)",
      },
    },
    screens: {
      mm: "320px", // 'min-width
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};

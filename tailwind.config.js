/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071225",
        navySoft: "#101f35",
        cyanBrand: "#13c8e8"
      },
      boxShadow: {
        card: "0 12px 35px rgba(7, 18, 37, 0.12)"
      }
    }
  },
  plugins: []
};

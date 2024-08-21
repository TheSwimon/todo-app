/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Josefin-Sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

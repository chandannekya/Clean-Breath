/** @type {import('tailwindcss').Config} */
module.export  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        popins: ["Popins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

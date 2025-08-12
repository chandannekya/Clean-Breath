/** @type {import('tailwindcss').Config} */
module.exports = {
  // This line enables dark mode. Tailwind will apply 'dark:' styles when
  // the 'dark' class is present on a parent HTML element (e.g., the <html> tag).
  darkMode: 'class', 
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Your custom fonts are preserved here
        inter: ["Inter", "sans-serif"],
        popins: ["Popins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
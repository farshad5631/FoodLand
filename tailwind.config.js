/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "0 2px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

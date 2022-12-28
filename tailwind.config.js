/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./static/index.html",
    "./src/app.tsx",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      red: "#e05353",
    },
  },
};

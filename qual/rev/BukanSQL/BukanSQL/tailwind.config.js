/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/views/**/*.{html,ejs}"],
  theme: {
    extend: {
      container: {
        // max-w-7xl mx-auto py-10 px-6 md:px-12 xl:px-6
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "3rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  // plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

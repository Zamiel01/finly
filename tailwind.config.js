/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".api/views/**/*.ejs", // Include your EJS files
    "./public/**/*.html", // Include any other public HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

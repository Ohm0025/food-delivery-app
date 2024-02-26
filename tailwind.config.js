/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FA4A0C",
      secondary: "#252B42",
    },
    extend: {
      backgroundImage: {
        "cover-pattern": "url('/src/assets/bgCover.svg')",
      },
    },
  },
  plugins: [],
};

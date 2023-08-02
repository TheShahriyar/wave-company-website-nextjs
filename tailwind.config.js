/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kausan: ["var(--kausan)"],
        poppins: ["var(--poppins)"],
      },
      colors: {
        primary: "#25c486",
      },
    },
  },
  plugins: [],
};

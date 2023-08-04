/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asap: ["var(--asap)"],
        openSans: ["var(--open-sans)"],
      },
      colors: {
        primary: {
          light: "#38ef7d",
          DEFAULT: "#25c486",
          dark: "#11998e",
        },
        title: "#222222",
        text: "#777777",
      },
    },
  },
  plugins: [],
};

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
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#102641",
        solid: "#031831",
        secondary: "#c48E59",
        third: "#C48E59",
      },
      backgroundImage: {
        hero: "url('/hero-bg.jpg')",
        founding: "url('/founding-bg.jpeg')",
        article2: "url('/article2-bg.jpg')",
        aboutus: "url('/aboutus-bg.jpeg')",
        service: "url('/service-bg.jpg')",
        contact: "url('/contactus-bg.jpg')",
      },
    },
  },
  plugins: [],
};

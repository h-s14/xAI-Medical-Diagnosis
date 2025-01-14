/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-img-clr": "#0A1016",
        "bg-img-grd1": "#54A6B2",
        "bg-img-grd2": "#111F27",
        "bg-img-grd3": "#0A1016",
        "nav-bar-bg": "#2C3A43",
        "nav-bar-link-hover": "#67B8C2",
        gls: "#2C3A43",
        gls2: "#D9E4E8",
      },
      backgroundImage: {
        "bg-image": "url('bg.jpeg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "custom-size": "500px 500px",
      },
    },
  },
  plugins: [],
};

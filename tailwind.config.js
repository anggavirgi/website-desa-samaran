import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#E2AA79",
        grass: "#A4BE7B",
        nature: "#5F8D4E",
        earth: "#285430",
      },
      screens: {
        mobile: "0px",
        tablet: "640px",
        hd: "1024px",
        fhd: "1400px",
      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 5px 10px 2px rgb(0 0 0 / 0.2)",
        "custom-hover": "0 10px 25px 5px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};

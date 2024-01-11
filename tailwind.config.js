/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss/nesting"),
    require("tw-elements/dist/plugin.cjs")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1592A",
          secondary: "#1855CB",
          accent: "#CC2200",
          info: "#BC8500",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
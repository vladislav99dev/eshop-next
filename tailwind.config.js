/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        dynaPuff: ["var(--font-dynaPuff)"],
      },
      colors: {
        "primary-100": "#00df9a",
        "primary-dark-100": "#00c98b",
        "primary-dark-200": "#00b27b",
        "primary-dark-300": "#009c6c",
        "primary-dark-400": "#00865c",
        "primary-dark-500": "#00704d",
        "primary-dark-600": "#00593e",
        "primary-dark-700": "#00432e",
        "primary-dark-800": "#002d1f",

        "primary-light-100": "#1ae2a4",
        "primary-light-200": "#33e5ae",
        "primary-light-300": "#4de9b8",
        "primary-light-400": "#66ecc2",
        "primary-light-500": "#80efcd",
        "primary-light-600": "#99f2d7",
        "primary-light-700": "#b3f5e1",
        "primary-light-800": "#ccf9eb",

        "primary-darkest": "#00160f",
        "primary-lightest": "#e6fcf5",

        "grey-100": "#636363",
        "grey-dark-100": "#3b3b3b",
        "grey-light-100": "#b1b1b1",
      },
    },
  },
  plugins: [],
};

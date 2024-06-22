/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
}
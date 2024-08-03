/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    flowbite.content(),
  ],
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(),

  ],
  theme: {},
};
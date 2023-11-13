module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {},
  variants: {},
  plugins: [require("flowbite")],
};

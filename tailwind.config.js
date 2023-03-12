/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      darkColor: "#7c2d12",
      secondaryColor: "#b45309",
      mainColor: "#fed7aa",
      pastelColor: "#fefce8",
      skinColor: "#ef4444",
      darkSkinColor: "#7f1d1d",
      black: "black",
      darkGrey: "#15141c",
      fontPrimary: "#957C65",
      fontSecondary:"#191919",
      white: "white",
      navbarColor: "#4E231B"
     
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
}

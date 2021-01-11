const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

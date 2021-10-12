module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar: {
          default: "#767676",
        },
        header: {
          default: "#F0F0F6",
          yellow: "#FFB400",
          black: "#2B2B2B",
          gray: "#767676",
        },
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      translate: ["active", "group-hover"],
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar: {
          default: "#767676",
        },
        dark: {
          main: "rgb(36, 37, 38)",
          icons: "rgb(228, 230, 235)",
          mainBackground: "rgb(24, 25, 26)",
        },
        header: {
          default: "#F0F0F6",
          yellow: "#FFB400",
          black: "#2B2B2B",
          gray: "#767676",
        },
      },
      maxWidth: {
        "9xl": "1440px",
      },
      spacing: {
        0.5: "2px",
        0.8: "3px",
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

/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#fafafa",
        200: "#ececec",
        300: "#cfcfcf",
        400: "#adadad",
        500: "#858585",
        secondary: "#616161",
        primary: "#303030",
      },
      blue: {
        50: "#b2cef3",
        100: "#d7e6fa",
        300: "#0b428e",
        400: "#0a3b7e",
        ice: "rgba(23, 219, 228, 0.1)",
        primary: "#0d4b9f",
      },
      tag: {
        purple: "#bd10e0",
        green: "#0d9f3f",
        yellow: "#fffaaf",
      },
      orange: "#ff4d00",
      yellow: "#fff200",
      warning: "#ffdf00",
      success: "#0d9f3f",
      error: "#eb001c",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#1b1b1b",
    },
    borderRadius: {
      none: "0",
      tiny: "2px",
      sm: "3px",
      DEFAULT: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      pill: "100px",
      full: "9999px",
    },
    fontSize: {
      tiny: ".5rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    fontWeight: {
      normal: 500,
      bold: 800,
    },
    fontFamily: {
      avenir: ["Avenir", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      lineHeight: {
        4.5: "1.125rem",
      },
      transitionDuration: {
        25: "25ms",
        50: "50ms",
      },
      boxShadow: {
        "border-b": "0 1px 0 0",
        "border-b-2": "0 2px 0 0",
        "border-b-3": "0 3px 0 0",
        "border-t": "0 -1px 0 0",
        "border-t-2": "0 -2px 0 0",
        "border-y-2": "0 -2px 0 0 #000, 0 2px 0 0 #000",
        toggle:
          "0px 2.5px 6.5px rgba(0, 0, 0, 0.15), 0px 2.5px 0.8px rgba(0, 0, 0, 0.06);",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

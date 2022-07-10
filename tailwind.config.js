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
        400: "#616161",
      },
      blue: {
        DEFAULT: "#0d4b9f",
        pressed: "#203177",
        disabled: "#d7e6fa",
      },
      yellow: {
        tide: "#fff200",
        alert: "#ffdf00",
      },
      tag: {
        purple: "#bd10e0",
        green: "#0d9f3f",
        yellow: "#fffaaf",
      },
      body: "#303030",
      secondary: "#616161",
      orange: "#ff4d00",
      error: "#eb001c",
      success: "#0d9f3f",
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
    },
    borderRadius: {
      none: "0",
      sm: "2px",
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
      medium: 600,
      semibold: 700,
      bold: 800,
      black: 900,
    },
    extend: {
      fontFamily: {
        avenir: ["Avenir", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        border: "0 0 0 0.5px",
        "border-2": "0 0 0 2px",
        "border-b": "0 1px 0 0",
        "border-b-2": "0 2px 0 0",
        toggle:
          "0px 2.5px 6.5px rgba(0, 0, 0, 0.15), 0px 2.5px 0.8px rgba(0, 0, 0, 0.06);",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

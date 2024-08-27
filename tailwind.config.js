const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|calendar|card|dropdown|input|modal|navbar|tabs|ripple|spinner|menu|divider|popover).js",
  ],
  theme: {
    extend: {
      // Colori personalizzati
      colors: {
        myPrimary: "#3282B8",
        mySecondary: "#0F4C75",
        myTertiary: "#BBE1FA",
        myQuaternary: "#1B262C",
        myQuinary: "#F0F4C3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};

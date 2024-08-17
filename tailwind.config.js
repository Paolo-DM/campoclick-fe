const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      /* #264653, #2a9d8f, #e9c46a, #f4a261, #e76f51 */
      colors: {
        myPrimary: '#264653',
        mySecondary: '#2a9d8f',
        myTertiary: '#e9c46a',
        myQuaternary: '#f4a261',
        myQuinary: '#e76f51',
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

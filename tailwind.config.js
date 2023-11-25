/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "rgba-13": "rgba(255, 208, 165, 0.13)",
      },
      borderColor: {
        "rgba-13": "rgba(255, 208, 165, 0.3)",
      },
    },
    backdropFilter: {
      "4.2": "blur(4.2px)",
    },
  },
  plugins: [],
};

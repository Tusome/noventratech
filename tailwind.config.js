/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E40AF",
        brandGrey: "#6B7280",
        brandDark: "#0B1120",
      },

      keyframes: {
        floatGlow: {
          "0%, 100%": { transform: "translate(-50%, 0px)" },
          "50%": { transform: "translate(-50%, 40px)" },
        },
      },

      animation: {
        floatGlow: "floatGlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
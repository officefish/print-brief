module.exports = {
  content: ['./index.html', './index.ts', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["coffee"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};

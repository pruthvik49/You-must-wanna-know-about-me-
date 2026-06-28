// tailwind.config.js

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrainsMono", "monospace"],
      },
    },
  },
  plugins: [],
};
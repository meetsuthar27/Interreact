/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-\[#[0-9a-fA-F]{3,6}\]/, // ✅ Correct - Matches `bg-[#hex]`
    },
  ],
};

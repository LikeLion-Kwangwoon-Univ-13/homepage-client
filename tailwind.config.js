/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'font-space',
    'text-curriculum-title',
    'text-curriculum-desc',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'curriculum-title': '30px',
        'curriculum-desc': '24px',
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      }
    },
  },
  plugins: [],
}

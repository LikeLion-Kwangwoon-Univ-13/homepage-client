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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
     },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
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
  plugins: [require('@tailwindcss/line-clamp')],
}

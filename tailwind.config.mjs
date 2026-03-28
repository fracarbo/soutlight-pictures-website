/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        amber: {
          DEFAULT: '#D9A938',
          dark: '#B8912E',
          glow: 'rgba(217,169,56,0.15)',
        },
      },
    },
  },
  plugins: [],
}

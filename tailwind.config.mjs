/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
        accent: {
          light: '#8B7355',
          dark: '#D2B48C',
        }
      }
    },
  },
  plugins: [],
}
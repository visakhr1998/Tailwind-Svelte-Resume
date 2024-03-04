/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
  plugins: [],
}


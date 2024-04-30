/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'code': ['Fira Code', 'Fira Mono', 'Consolas', 'Menlo', 'Courier', 'monospace']
        'code': ['Fira Code', 'Fira Mono']
      }
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}


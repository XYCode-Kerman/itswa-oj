// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css', '~/assets/fonts/Fira_Code/fira_code.css'],
  routeRules: {
    '/api/**': {
      proxy: 'http://127.0.0.1:6572/**',
      cors: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

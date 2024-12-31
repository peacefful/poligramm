// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": "../src",
  },
  dir: {
    pages: "./src/app/routes",
    layouts: './src/app/layouts'
  },
  css: [
    "./src/app//styles/normalize.scss",
  ],
  modules: [
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./src/app/i18n/i18n.config.ts",
  },
});

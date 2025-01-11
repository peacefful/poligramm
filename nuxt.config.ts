// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'node:path';

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: 'src',
  alias: {
    "@": "../src",
  },
  dir: {
    layouts: resolve(__dirname, 'src/app/layouts'),
  },
  css: [
    "./src/app/styles/normalize.scss",
  ],
  modules: [
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    '@nuxt/fonts',
  ],
  i18n: {
    vueI18n: "./src/app/i18n/i18n.config.ts",
  },

  fonts: {
    assets: {
      prefix: '/_fonts/'
    }
  }
});

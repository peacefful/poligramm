// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'node:path'

export default defineNuxtConfig({
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',
  alias: {
    '@': '../src',
    '@/widgets': '../src/widgets',
    '@/entities': '../src/entities',
    '@/features': '../src/features',
    '@/shared': '../src/shared'
  },
  dir: {
    layouts: resolve(__dirname, 'src/app/layouts')
  },
  css: ['./src/app/styles/normalize.scss'],
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  shadcn: {
    prefix: '',
    componentDir: '../src/shared/ui'
  },
  i18n: {
    vueI18n: './src/app/i18n/i18n.config.ts'
  },
  fonts: {
    assets: {
      prefix: '/_fonts/'
    }
  }
})
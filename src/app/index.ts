import './styles/normalize.scss'
import './styles/tailwind.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'

import App from './App.vue'
import { languages, defaultLocale } from './providers'
import { router } from './providers'

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'ru',
  messages
})

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

export const application = app.use(i18n).use(createPinia()).use(router)
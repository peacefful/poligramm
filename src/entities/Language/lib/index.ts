import { useI18n } from 'vue-i18n'
import { storage } from '@/shared/lib/utils'

export const switchLang = () => {
  const { locale } = useI18n({ useScope: 'global' })

  const updateLang = (value: string): void => {
    locale.value = value
    storage.setData('lang', locale.value)
  }

  const checkCurrentLang = (lang: string): string => {
    if (locale.value === lang) return 'selected'
    return ''
  }

  return {
    updateLang,
    checkCurrentLang
  }
}

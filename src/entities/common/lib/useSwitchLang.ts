import { useI18n } from 'vue-i18n'

export const useSwitchLang = () => {
  const { locale } = useI18n({ useScope: 'global' })
  const currentLang = useCookie('lang')

  const updateLang = (value: string): void => {
    locale.value = value
    currentLang.value = locale.value
  }

  const checkCurrentLang = (lang: string): string => {
    if (currentLang.value === lang) return 'selected'
    return ''
  }

  return {
    updateLang,
    checkCurrentLang
  }
}

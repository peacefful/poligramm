import { useI18n } from 'vue-i18n'
import { string, minLength } from 'valibot'

export const validator = () => {
  const { t } = useI18n({ useScope: 'global' })

  return {
    login: string([minLength(6, t('incorrectesLogin'))]),
    password: string([minLength(12, t('incorrectesPassword'))])
  }
}
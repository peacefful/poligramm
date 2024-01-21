import { useI18n } from "vue-i18n"

export const toogleLanguage = () => {
	const { t, locale } = useI18n({ useScope: 'global' })

	const updateLocale = () => {
		return locale.value === "kz" ? locale.value = "ru" : locale.value = "kz";
	}
	
	return { t, updateLocale }
}
import { useI18n } from "vue-i18n"

export const useToogleLanguage = () => {
	const { t, locale } = useI18n({ useScope: 'global' })

	const updateLocale = () => {
		locale.value === "kz" ? locale.value = "ru" : locale.value = "kz";
	};
	
	return { t, updateLocale }
}
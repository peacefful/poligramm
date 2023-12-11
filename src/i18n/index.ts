import kz from "./kz.json"
import ru from "./ru.json"

export const defaultLocale = localStorage.getItem("lang") || undefined

export const languages = {
	kz,
	ru
}
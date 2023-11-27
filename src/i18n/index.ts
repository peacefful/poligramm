import kz from "./kz.json"
import ru from "./ru.json"

export const defaultLocale = localStorage.getItem("lang")

export const languages = {
	kz,
	ru
}
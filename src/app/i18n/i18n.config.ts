import kz from "./kz.json";
import ru from "./ru.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: useCookie("lang").value || 'ru',
  fallbackLocale: "ru",
  messages: {kz, ru},
}));

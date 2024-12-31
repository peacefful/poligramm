import kz from "./kz.json";
import ru from "./ru.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  fallbackLocale: "ru",
  messages: {kz, ru},
}));

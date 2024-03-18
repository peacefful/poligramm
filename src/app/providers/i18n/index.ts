import kz from './kz.json'
import ru from './ru.json'
import { storage } from '@/utils/storage'

export const defaultLocale = storage.getData('lang') || 'ru'

export const languages = {
  kz,
  ru
}

import { storage } from '@/shared/lib/utils'
import kz from './kz.json'
import ru from './ru.json'

export const defaultLocale = storage.getData('lang') || 'ru'

export const languages = { kz, ru }
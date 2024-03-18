import { string, minLength } from 'valibot'

export const validator = {
  login: () => string([minLength(6, 'Логин слишком короткий')]),
  password: () => string([minLength(12, 'Пароль слишком короткий')])
} as const
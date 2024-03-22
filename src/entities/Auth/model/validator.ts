import { string, minLength } from 'valibot'

export const validator = {
  login: string([minLength(6)]),
  password: string([minLength(12)])
}

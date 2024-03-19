import type { IUser, IUserAuthData } from '../model'

export const isEmptyObj = (obj: IUser | IUserAuthData): boolean => {
  for (const key in obj) {
    if (key) {
      return false
    }
  }
  return true
}

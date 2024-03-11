import type { IUser } from '@/interfaces/iUsers'

const symbols: string[] = ['!', '@', '#', '$', '%', '&', '_', '+', '=']

export const validateRegistrationData = (user: IUser): boolean => {
  let isValidate: boolean = false

  if (
    user.surname.trim() &&
    user.name.trim() &&
    user.appointment.trim() &&
    user.login.trim() &&
    user.password.trim() &&
    user.rank.trim() &&
    user.role.trim() &&
    user.phone.trim()
  ) {
    if (user.login.length >= 5) {
      if (user.password.length >= 8) {
        let hasSymbol = false
        for (const iterator of user.password) {
          if (symbols.includes(iterator)) {
            hasSymbol = true
            break
          }
        }
        if (!hasSymbol) {
          throw new Error('Ошибка, в пароле не хватает символов')
        }
        isValidate = true
      } else {
        throw new Error('Ошибка, пароль слишком короткий')
      }
    } else {
      throw new Error('Ошибка, слишком короткий логин')
    }
  }

  return isValidate
}

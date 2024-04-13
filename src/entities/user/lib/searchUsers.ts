import { type TUser } from '@/shared/types'

export const searchUsers = (users: TUser[], findUserName: string): TUser[] | [] => {
  const searchValueParts = findUserName.split(' ')

  if (searchValueParts.length === 1) {
    return users.filter((user) => {
      return user.name.includes(findUserName) || user.surname.includes(findUserName)
    })
  } else if (searchValueParts.length === 2) {
    const firstNamePart = searchValueParts[0]
    const lastNamePart = searchValueParts[1]

    return users.filter((user) => {
      return (
        (user.name.includes(firstNamePart) && user.surname.includes(lastNamePart)) ||
        (user.name.includes(lastNamePart) && user.surname.includes(firstNamePart))
      )
    })
  }

  return []
}

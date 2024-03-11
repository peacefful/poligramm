import type { IChats } from '@/interfaces/iChats'
import type { IUser } from '@/interfaces/iUsers'

export const filterChats = (chats: IChats[], findRoomName: string) => {
  if (chats) {
    return chats.filter((chat) => chat.roomName.includes(findRoomName))
  } else {
    return []
  }
}

export const filterUsers = (users: IUser[], findUserName: string) => {
  const searchValueParts = findUserName.split(' ')

  if (searchValueParts.length === 1) {
    return users.filter(
      (user) => user.name.includes(findUserName) || user.surname.includes(findUserName)
    )
  } else if (searchValueParts.length === 2) {
    const firstNamePart = searchValueParts[0]
    const lastNamePart = searchValueParts[1]

    return users.filter((user) => {
      return (
        (user.name.includes(firstNamePart) && user.surname.includes(lastNamePart)) ||
        (user.name.includes(lastNamePart) && user.surname.includes(firstNamePart))
      )
    })
  } else {
    return []
  }
}

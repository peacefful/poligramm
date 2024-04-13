import { type TChat } from '@/shared/types'

export const searchChats = (chats: TChat[], chatName: string): TChat[] | [] => {
  if (chats) {
    return chats.filter((chat) => {
      return chat.chatName.includes(chatName)
    })
  }
  return []
}
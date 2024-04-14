import { type TSearchChat } from '@/entities/chat'
import { type TChat } from '@/shared/types'

export const searchChats = (searchData: TSearchChat): TChat[] => {
  return searchData.chats.filter((chat) => {
    return chat.roomName.includes(searchData.chatName)
  })
}
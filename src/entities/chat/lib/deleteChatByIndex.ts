import type { TDeleteChat } from '../model/types'

export const deleteChatByIndex = (deleteChat: TDeleteChat) => {
  return deleteChat.chats.filter((chat) => chat.id !== deleteChat.id)
}

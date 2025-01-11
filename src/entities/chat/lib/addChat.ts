import type { TAddChat } from '../model/types'

export const addChat = (addChat: TAddChat) => {
  return addChat.chats.push(addChat.chat)
}

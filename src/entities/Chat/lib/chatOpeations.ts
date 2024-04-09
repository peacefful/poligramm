import { type TChat } from '@/shared/types'

type TDeleteChat = {
  chats: TChat[]
  index: number
}

type TAddChat = {
  chats: TChat[]
  chat: TChat
}

export const deleteChatByIndex = (deleteChat: TDeleteChat) => {
  return deleteChat.chats.splice(deleteChat.index, 1)
}

export const addChat = (addChat: TAddChat) => {
  return addChat.chats.push(addChat.chat)
}
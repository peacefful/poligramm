import type { TChat, TMessage } from '@/shared/types'

export type TSearchChat = {
  chatName: string
  chats: TChat[]
}

export type TCreateChat = {
  roomName: string
  description: string
}

export type TLoginChat = Omit<TChat, 'userId'>

export type TUpdateChat = {
  id: number,
  data: TChat
}

export type TJoinChat = {
  route: string
  getChat: (id: number) => void
}

export type TNotificationJoinChat = {
  uuid: string
  username: string
  userMessage: TMessage,
  setMessage: (messages: TMessage) => void
}

export type TDeleteChat = {
  chats: TChat[]
  id: number
}

export type TAddChat = {
  chats: TChat[]
  chat: TChat
}

export type TConfirmDeleteChat = {
  isOpenModal: boolean
  chatId: number
}
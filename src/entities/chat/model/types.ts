import type { TChat, TMessage } from '@/shared/types'

export type TSearchChat = {
  chatName: string
  chats: TChat[]
}

export type TLoginChat = Omit<TChat, 'userId'>

export type TUpdateChat = {
  id: number,
  data: TChat
}

export type TJoinChat = {
  route: string
  getChat: (id: string) => void
}

export type TNotificationJoinChat = {
  uuid: string
  username: string
  userMessage: TMessage,
  setMessage: (messages: TMessage) => void
}
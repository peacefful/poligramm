import type { TChat } from '@/shared/types'

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
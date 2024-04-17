import type { TChat } from '@/shared/types'

export type TSearchChat = {
  chats: TChat[]
  chatName: string
}

export type TLoginChat = Omit<TChat, 'userId'>

import type { TChat } from '@/shared/types'

export type TSearchChat = {
  chatName: string
  chats: TChat[]
}

export type TLoginChat = Omit<TChat, 'userId'>

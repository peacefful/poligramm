import type { TUser, TChat } from '@/shared/types'

export type TUserChat = TUser & {
  chats: TChat[]
}
import type { TUser, TChat } from '@/shared/types'

export type TUserChat = TUser & {
  chats: TChat[]
}

export type TInviteUser = {
  isOpenAddUser:boolean
  users:TUser[]
  chatName:string
  chatUuid: string
  chat: TChat
}
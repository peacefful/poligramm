import type { TChat, TMessage } from '@/shared/types'

export type TSearchChat = {
  chatName: string
  chats: TChat[]
}

export type TCreateChat = {
  roomName: string
  description: string
  adminId: number
}

export type TLoginChat = Omit<TChat, 'userId' | 'description' | 'messages'>

export type TUpdateChat = {
  id: number
  data: TChat
}

export type TJoinChat = {
  route: string
  getChat: (id: number | string) => void
}

export type TNotificationJoinChat = {
  uuid: string
  username: string
  userMessage: TMessage
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

export type TAnaliseUserMessage = {
  username: string
  fileLength: number
  textLength: number
}

export type TAnaliseChatOfMounth = {
  mounthName: string
  userAnaliseMessage?: TAnaliseUserMessage[]
}

export type TAnaliseChat = {
  analiseOfMounth?: TAnaliseChatOfMounth[]
  chatFileLength: number
  chatTextLength: number
}

export type TAnaliseChatDiagram = Pick<TAnaliseUserMessage, 'fileLength' | 'textLength'>

import type { TMessage } from './message'

export type TChat = {
  id: number
  roomName: string
  description: string
  uuid: string
  userId: number
  adminId: number
  messages: TMessage[]
}

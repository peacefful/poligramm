import type { IChats } from './iChats'

export interface IUser {
  id?: number
  surname: string
  name: string
  appointment: string
  rank: string
  login: string
  password: string
  phone: string
  role: string
  uuid?: string
  chats: IChats[]
}
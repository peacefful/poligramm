import type { IChat } from '@/entities/Chat'

export interface IUser {
  surname: string
  name: string
  login: string
  password: string
  phone: string
  chats: IChat[]
}

export interface IUpdateUser extends IUser {
  id?: number
}

export interface IUserAuthData {
  login: string
  password: string
}

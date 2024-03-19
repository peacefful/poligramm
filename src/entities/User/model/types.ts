export interface IChats {
  id: number
  roomName: string
  uuid: string
  userId: number
}

export interface IUser {
  surname: string
  name: string
  login: string
  password: string
  phone: string
  chats: IChats[]
}

export interface IUpdateUser extends IUser {
  id?: number
}

export interface IUserAuthData {
  login: string
  password: string
}
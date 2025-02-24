export type TMessage = {
  userId: string | number | null
  chatId: number
  text: string
  sendTime: string
  sendDate: string
  username: string | null
  joinUser?: string[]
  file: string
  uuid?: string
  adminId: number
}

export type TMessage = {
  userId: string
  chatId: number
  text: string
  sendTime: string
  username: string | null
  joinUser?: string[]
  file: string
  uuid?: string
}
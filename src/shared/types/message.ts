export type TMessage = {
  userId: string | number
  chatId: number
  text: string
  sendTime: string
  username: string | null
  joinUser?: string[]
  file: string
  uuid?: string
}

export type TMessage = {
  userId: string
  text: string
  sendTime: string
  username: string | null
  joinUser?: string[]
  uuid?: string
}
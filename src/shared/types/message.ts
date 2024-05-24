export type TMessage = {
  id: string
  text: string
  sendTime: string
  username: string | null
  joinUser?: string[]
  uuid?: string
}
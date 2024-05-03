export type TMessage = {
  id: string | null
  text: string
  sendTime: string
  username: string | null
  joinUser?: string[]
  uuid?: string
}
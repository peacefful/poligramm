export type TMessage = {
  id: number
  text: string
  sendTime: string
  username: string | null
  joinUser?: string[]
  uuid?: string
}
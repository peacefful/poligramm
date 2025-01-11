import { http } from '@/shared/api'
import type { TChat } from '@/shared/types'

export const fetchChats = async (): Promise<TChat[] | Error> => {
  try {
    const chats: TChat[] = (await http.get('/api/chats')).data
    return chats
  } catch (error) {
    return new Error('Error fetch chat')
  }
}

import { http } from '@/shared/api'
import { type TAnaliseChat } from '@/entities/chat'

export const getAnaliseChat = async (
  chatId: string | number
): Promise<TAnaliseChat | Error> => {
  try {
    const { data } = await http.post(`/api/analise/${chatId}`)
    return data
  } catch (error) {
    return new Error('Error fetching chat')
  }
}

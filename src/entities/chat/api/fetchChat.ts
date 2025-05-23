import { http } from '@/shared/api'
import type { TChat } from '@/shared/types'

export const fetchChat = async (id: number): Promise<TChat | Error> => {
  const uuid = useCookie('uuid')
  const userId = useCookie('userId')

  try {
    const { data } = await http.post(`/api/chats/${id}`, { id: userId.value, uuid: uuid.value })
    return data
  } catch (error) {
    return new Error('Error fetching chat')
  }
}

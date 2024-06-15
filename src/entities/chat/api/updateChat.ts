import { http } from '@/shared/api'
import type { TUpdateChat } from '../model'

export const updateChat = async (updateChat: TUpdateChat) => {
  await http.put(`/api/chats/${updateChat.id}`, updateChat.data)
}

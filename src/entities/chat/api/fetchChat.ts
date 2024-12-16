import { http } from "@/shared/api"
import type { TChat } from "@/shared/types"

export const fetchChat = async (id: number): Promise<TChat | Error> => {
  try {
    const chat: TChat = (await http.get(`/api/chats/${id}`)).data
    return chat
  } catch (error) {
    return new Error('Error fetching chat')
  }
}
import { http } from '@/shared/api'

export const deleteChat = async (id: number) => {
  try {
    await http.delete(`/api/chats/${id}`)
  } catch (error) {
    console.log(error)
  }
}

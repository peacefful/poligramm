import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { v4 as uuidv4 } from 'uuid'

export const addChat = async (room: string) => {
  try {
    const id: number = Number(storage.getData('id'))
    if (room.trim()) {
      await http.post('/api/chats', {
        roomName: room,
        uuid: uuidv4(),
        userId: id
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteChat = async (id: number) => {
  try {
    await http.delete(`/api/chats/${id}`)
  } catch (error) {
    console.log(error)
  }
}
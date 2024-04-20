import { http } from "@/shared/api"
import { storage } from "@/shared/lib/utils"
import { v4 as uuidv4 } from 'uuid'
import type { TChat } from "@/shared/types"

export const createChat = async (room: string): Promise<TChat | Error> => {
  try {
    const id: number = Number(storage.getData('id'))
    let chat = {} as TChat

    if (room.trim()) {
      chat = await http.post('/api/chats', {
        roomName: room,
        uuid: uuidv4(),
        userId: id
      })
    }

    return chat
  } catch (error) {
    return new Error('Error create chat')
  }
}
import { v4 as uuidv4 } from 'uuid'
import { http } from "@/shared/api"
import { storage } from "@/shared/lib/utils"
import type { TChat } from "@/shared/types"
import type { TCreateChat } from '../model'

export const createChat = async (dataChat: TCreateChat): Promise<TChat | Error> => {
  try {
    const id: number = Number(storage.getData('id'))
    let chat = {} as TChat

    if (dataChat.roomName.trim()) {
      chat = await http.post('/api/chats', {
        ...dataChat,
        uuid: uuidv4(),
        userId: id
      })
    }

    return chat
  } catch (error) {
    return new Error('Error create chat')
  }
}
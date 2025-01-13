import { v4 as uuidv4 } from 'uuid'
import { http } from '@/shared/api'
import type { TChat } from '@/shared/types'
import type { TCreateChat } from '../model'

export const createChat = async (dataChat: TCreateChat): Promise<TChat | Error> => {
  const userId = useCookie('userId')
  try {
    const id: number = Number(userId.value)
    let chat = {} as TChat

    console.log('data', dataChat, uuidv4(),id)

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

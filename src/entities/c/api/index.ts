import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { v4 as uuidv4 } from 'uuid'
import { type TChat } from '@/shared/types'

export const fetchChats = async (): Promise<TChat[] | Error> => {
  try {
    const chats: TChat[] = (await http.get('/api/chats')).data
    return chats
  } catch (error) {
    return new Error('Error fetch chats')
  }
}

export const fetchChat = async (id: string | null): Promise<TChat | Error> => {
  try {
    const chat: TChat = (await http.get(`/api/chats/${id}`)).data
    return chat
  } catch (error) {
    return new Error('Error fetching chat')
  }
}

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

export const deleteChat = async (id: number) => {
  try {
    await http.delete(`/api/chats/${id}`)
  } catch (error) {
    console.log(error)
  }
}

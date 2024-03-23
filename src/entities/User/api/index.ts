import { http } from '@/shared/api'
import type { IUser } from '@/shared/types'

export const getUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const users: IUser[] = (await http.get('/api/users')).data
    return users
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async (id: string): Promise<IUser | undefined> => {
  try {
    const users: IUser = (await http.get(`/api/users/${id}`)).data
    return users
  } catch (error) {
    console.log(error)
  }
}
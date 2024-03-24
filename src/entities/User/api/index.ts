import { http } from '@/shared/api'
import { getOtherUsersById } from '@/entities/user'
import type { IUser } from '@/shared/types'

export const getUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const users: IUser[] = (await http.get('/api/users')).data
    return getOtherUsersById(users)
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async (id: string | null): Promise<IUser | undefined> => {
  try {
    const user: IUser = (await http.get(`/api/users/${id}`)).data
    return user
  } catch (error) {
    console.log(error)
  }
}

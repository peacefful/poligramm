import { http } from '@/shared/api'
import { getOtherUsersById } from '@/entities/user'
import type { IUsers } from '@/entities/user'
import type { IUser } from '@/shared/types'

export const getUsers = async (): Promise<IUsers[] | undefined> => {
  try {
    const users: IUsers[] = (await http.get('/api/users')).data
    return getOtherUsersById(users)
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

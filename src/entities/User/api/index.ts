import { http } from '@/shared/api'
import { getOtherUsersById } from '@/entities/user'
import type { TUser } from '@/shared/types'

export const getUsers = async (): Promise<TUser[] | undefined> => {
  try {
    const users: TUser[] = (await http.get('/api/users')).data
    return getOtherUsersById(users)
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async (id: string | null): Promise<TUser | undefined> => {
  try {
    const user: TUser = (await http.get(`/api/users/${id}`)).data
    return user
  } catch (error) {
    console.log(error)
  }
}

import { http } from '@/shared/api'
import { getOtherUsersById } from '@/entities/user'
import type { TUser } from '@/shared/types'

export const fetchUsers = async (): Promise<TUser[] | Error> => {
  try {
    const users: TUser[] = (await http.get('/api/users')).data
    return getOtherUsersById(users)
  } catch (error) {
    return new Error('Error fetch users')
  }
}

export const fetchUser = async (id: string | null): Promise<TUser | Error> => {
  try {
    const userResponse: TUser = (await http.get(`/api/users/${id}`)).data
    return userResponse
  } catch (error) {
    return new Error('Error fetching user')
  }
}
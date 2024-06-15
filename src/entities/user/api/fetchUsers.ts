import { http } from "@/shared/api"
import type { TUser } from "@/shared/types"
import { getOtherUsersById } from "../lib"

export const fetchUsers = async (): Promise<TUser[] | Error> => {
  try {
    const users: TUser[] = (await http.get('/api/users')).data
    return getOtherUsersById(users)
  } catch (error) {
    return new Error('Error fetch users')
  }
}
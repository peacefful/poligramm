import { http } from "@/shared/api"
import { getOtherUsersById } from "../lib"
import type { TUser } from "@/shared/types"

export const fetchUsers = async (): Promise<TUser[] | Error> => {
  try {
    const users: TUser[] = (await http.get('/api/users')).data
    return getOtherUsersById(users)
  } catch (error) {
    return new Error('Error fetch users')
  }
}
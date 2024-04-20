import { http } from "@/shared/api"
import type { TUser } from "@/shared/types"

export const registration = async (user: TUser): Promise<TUser | Error> => {
  try {
    const regUser: TUser = (await http.post('/api/users', { ...user })).data
    return regUser
  } catch (error) {
    return new Error('Error registration')
  }
}
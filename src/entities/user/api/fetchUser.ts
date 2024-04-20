import { http } from "@/shared/api"
import type { TUser } from "@/shared/types"

export const fetchUser = async (id: string | null): Promise<TUser | Error> => {
  try {
    const user: TUser = (await http.get(`/api/users/${id}`)).data
    return user
  } catch (error) {
    return new Error('Error fetching user')
  }
}
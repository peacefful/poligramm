import { type IUsers } from '@/entities/user'
import { storage } from '@/shared/lib/utils'

const id: string | null = storage.getData('id')

export const getOtherUsersById = (users: IUsers[]) => {
  return users.filter((user) => user.id !== id)
}
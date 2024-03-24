import { storage } from '@/shared/lib/utils'
import { type IUser } from '@/shared/types'

const id: string | null = storage.getData('id')

export const getOtherUsersById = (users: IUser[]) => {
  return users.filter((user) => user.id !== id)
}
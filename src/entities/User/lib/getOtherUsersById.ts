import { storage } from '@/shared/lib/utils'
import { type TUser } from '@/shared/types'

const id: string | null = storage.getData('id')

export const getOtherUsersById = (users: TUser[]): TUser[] => {
  return users.filter((user) => user.id !== id)
}

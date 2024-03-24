import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { AuthModel } from '@/entities/auth'
import { useMoveRoute } from '@/shared/lib/hooks'
import type { IUser } from '@/shared/types'

export const authorization = async (authData: AuthModel.IAuthData): Promise<void> => {
  try {
    const isAuthUser = await http.post(`/api/users/auth`, { ...authData })

    if (isAuthUser) {
      storage.setData('token', isAuthUser.data.token)
      storage.setData('id', isAuthUser.data.id)
      storage.setData('uuid', isAuthUser.data.uuid)
      storage.setData('username', `${isAuthUser.data.name} ${isAuthUser.data.surname}`)
      console.log(isAuthUser.data.token);
      
      // useMoveRoute('/chats')
    } else {
      new Error('Authorization error')
    }
  } catch (error) {
    console.log(error)
  }
}

export const registration = async (user: IUser) => {
  try {
    const newUser = await http.post('/api/users', { ...user })
    return newUser ? useMoveRoute('/') : new Error('Error during registration')
  } catch (error) {
    console.log(error)
  }
}

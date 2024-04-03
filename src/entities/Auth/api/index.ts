import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { AuthModel } from '@/entities/auth'
import { useMoveRoute } from '@/shared/lib/hooks'
import { type TUser } from '@/shared/types'
import Cookies from 'js-cookie'

export const authorization = async (authData: AuthModel.TAuthData): Promise<void> => {
  try {
    const isAuthUser = await http.post(`/api/users/auth`, { ...authData })

    if (isAuthUser) {
      Cookies.set('accessToken', isAuthUser.data.accessToken)
      Cookies.set('uuid', isAuthUser.data.uuid)
      storage.setData('id', isAuthUser.data.id)
      useMoveRoute('/chats')
    } else {
      new Error('Authorization error')
    }
  } catch (error) {
    console.log(error)
  }
}

export const registration = async (user: TUser) => {
  try {
    const newUser = await http.post('/api/users', { ...user })
    return newUser ? useMoveRoute('/') : new Error('Error during registration')
  } catch (error) {
    console.log(error)
  }
}

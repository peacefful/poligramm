import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { AuthModel } from '@/entities/auth'
import { type TUser } from '@/shared/types'
import Cookies from 'js-cookie'

export const authorization = async (
  authData: AuthModel.TAuthData
): Promise<AuthModel.TAuthResponse | Error> => {
  try {
    const authUser: AuthModel.TAuthResponse = (
      await http.post(`/api/users/auth`, {
        ...authData
      })
    ).data

    if (authUser) {
      Cookies.set('accessToken', authUser.accessToken)
      Cookies.set('refreshToken', authUser.refreshToken)
      Cookies.set('uuid', authUser.uuid)
      storage.setData('id', authUser.id)
    }

    return authUser
  } catch (error) {
    return new Error('Error authorization')
  }
}

export const registration = async (user: TUser): Promise<TUser | Error> => {
  try {
    const regUser: TUser = (await http.post('/api/users', { ...user })).data
    return regUser
  } catch (error) {
    return new Error('Error registration')
  }
}

export const logout = (): void => {
  Cookies.remove('refreshToken')
  Cookies.remove('uuid')
  storage.clearData()
}

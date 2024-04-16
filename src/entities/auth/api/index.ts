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

export const refreshToken = async (): Promise<void | Error> => {
  try {
    const currentRefreshToken: string | undefined = Cookies.get('refreshToken')
    const response: AuthModel.TRefreshTokenResponse = (
      await http.post('/api/users/refresh', {
        currentRefreshToken
      })
    ).data

    Cookies.set('refreshToken', response.refreshToken)
    Cookies.set('accessToken', response.accessToken)
  } catch (error) {
    return new Error('Error when receiving an updated access token')
  }
}

export const clearSession = (): boolean => {
  Cookies.remove('refreshToken')
  Cookies.remove('uuid')
  storage.clearData()
  
  return true
}
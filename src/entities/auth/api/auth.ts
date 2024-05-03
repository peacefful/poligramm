import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { AuthModel } from '@/entities/auth'
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

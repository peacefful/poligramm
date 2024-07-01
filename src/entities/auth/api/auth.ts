import Cookies from 'js-cookie'
import { AuthModel } from '@/entities/auth'
import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { AxiosError } from 'axios'

export const authorization = async (
  authData: AuthModel.TAuthData
): Promise<AuthModel.TAuthResponse | AxiosError> => {
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
    return error as AxiosError
  }
}

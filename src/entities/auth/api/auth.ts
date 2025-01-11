import { AuthModel } from '@/entities/auth'
import { http } from '@/shared/api'
import { AxiosError } from 'axios'

export const authorization = async (
  authData: AuthModel.TAuthData
): Promise<AuthModel.TAuthResponse | AxiosError> => {
  const accessToken = useCookie('accessToken')
  const refreshToken = useCookie('refreshToken')
  const uuid = useCookie('uuid')
  const userId = useCookie('userId')

  try {
    const authUser: AuthModel.TAuthResponse = (
      await http.post(`/api/users/auth`, {
        ...authData
      })
    ).data

    if (authUser) {
      accessToken.value = authUser.accessToken
      refreshToken.value = authUser.refreshToken
      uuid.value = authUser.uuid
      userId.value = authUser.id
    }

    return authUser
  } catch (error) {
    return error as AxiosError
  }
}

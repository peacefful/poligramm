import { AuthModel } from '@/entities/auth'
import { http } from '@/shared/api'

export const refreshToken = async (): Promise<void | Error> => {
  const refreshToken = useCookie('refreshToken')
  const accessToken = useCookie('refreshToken')

  try {
    const currentRefreshToken: string | null | undefined = refreshToken.value
    const response: AuthModel.TRefreshTokenResponse = (
      await http.post('/api/users/refresh', {
        currentRefreshToken
      })
    ).data

    refreshToken.value = response.refreshToken
    accessToken.value = response.accessToken
  } catch (error) {
    return new Error('Error when receiving an updated access token')
  }
}

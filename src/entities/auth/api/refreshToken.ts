import Cookies from "js-cookie";
import { AuthModel } from "@/entities/auth";
import { http } from "@/shared/api";

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
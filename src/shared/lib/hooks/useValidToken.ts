import { jwtDecode } from 'jwt-decode'
import type { RouteLocationNormalized } from 'vue-router'

type TJwtDecode = {
  id: string
  login: string
  password: string
  iat: number
  exp: number
}

export const useValidToken = (): boolean => {
  const accessToken = useCookie('accessToken')
  const currentTime = Date.now()

  if (!accessToken.value) return false

  try {
    const decodedToken: TJwtDecode = jwtDecode(accessToken.value)
    const expirationTime = decodedToken.exp * 1000

    return currentTime < expirationTime
  } catch (error) {
    console.error('Ошибка при декодировании токена:', error)
    return false
  }
}

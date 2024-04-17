import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

type TJwtDecode = {
  id: string
  login: string
  password: string
  iat: number
  exp: number
}

export const isValidToken = (): boolean => {
  const thresholdMinutes = 5
  const accessToken = Cookies.get('accessToken')
  const currentTime = Date.now()

  if (!accessToken) return false

  const decodedToken: TJwtDecode = jwtDecode(accessToken)
  const expirationTime = decodedToken.exp * 1000
  const timeUntilExpiration = expirationTime - currentTime
  const timeThreshold = thresholdMinutes * 60 * 1000

  return timeUntilExpiration > timeThreshold
}

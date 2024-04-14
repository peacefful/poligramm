export type TAuthData = {
  login: string
  password: string
}

export type TAuthResponse = {
  id: string
  accessToken: string
  refreshToken: string
  uuid: string
}

export type TRefreshTokenResponse = {
  accessToken: string
  refreshToken: string
}
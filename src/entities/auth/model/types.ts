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
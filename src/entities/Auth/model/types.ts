export type TAuthData = {
  login: string
  password: string
}

export type TAxiosAuthResponse = {
  id: string
  accessToken: string
  refreshToken: string
  uuid: string
}
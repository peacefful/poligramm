export const clearSession = (): boolean => {
  useCookie('accessToken').value = null
  useCookie('refreshToken').value = null
  useCookie('userId').value = null
  return true
}

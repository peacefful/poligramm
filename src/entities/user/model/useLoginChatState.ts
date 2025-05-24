export function useLoginChatState() {
  const userLoginChatCookie = useCookie('userLoginChatCookie')
  return useState('loginChatState', () => userLoginChatCookie.value)
}

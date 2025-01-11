import { SOCKETS } from '@/shared/api'

export const joinToChat = (uuid: string) => {
  return SOCKETS.emit('join', uuid)
}

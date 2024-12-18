import { ApiChat } from '@/entities/chat'
import { getIdUuidByRoutePath } from './getIdUuidByRoutePath'
import { type TJoinChat } from '@/entities/chat'

export const joinChatByRoute = (joinData: TJoinChat): string => {
  const { id, uuid } = getIdUuidByRoutePath(joinData.route)
  ApiChat.joinToChat(uuid)
  joinData.getChat(+id)
  return uuid
}

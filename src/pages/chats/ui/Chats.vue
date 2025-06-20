<template>
  <MainLayout>
    <div class="min-h-screen flex justify-center items-center">
      <div class="text-white rounded-md p-1 text-1xl bg-black">{{ t('selectChat') }}</div>
      <div v-if="isInviteRoom">
        <Notification
          :is-invite-room="isInviteRoom"
          :chatTitle="inviteChat.title"
          @enter-chat="
            enterChat(
              inviteChat.uuid,
              inviteChat.title,
              inviteChat.roomId,
              inviteChat.adminId,
              closeNotification
            )
          "
          @close-notification="logoutChat"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { MainLayout } from '@/shared/ui/layouts/main'
import { SOCKETS } from '@/shared/api'
import { reactive, ref } from 'vue'
import { Notification } from '@/entities/chat'
import { useEnterChat } from '@/shared/lib/hooks'
import { useCustomFetch } from '@/shared/api'
import { Skeleton } from '~/shared/ui/skeleton'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

useSeoMeta({
  title: () => t('chats'),
  description: 'Выбор чата из списка'
})

const isInviteRoom = ref(false)
const inviteChat = reactive({
  title: '',
  uuid: '',
  userUuid: false,
  roomId: null,
  adminId: 0
})

const uuid = useCookie('uuid')

const closeNotification = () => {
  isInviteRoom.value = false
}

const closeChatByUuid = () => {
  SOCKETS.emit('closeChatByUuid', {
    chatId: inviteChat.roomId,
    userUuid: uuid.value
  })
}

const logoutChat = () => {
  closeNotification()
  closeChatByUuid()
}

const uuidUser = useCookie('uuid')

SOCKETS.emit('personalInvite', uuidUser.value)

SOCKETS.on('messageInvite', async (uuidRoom, titleRoom, userUuid, roomId, adminId) => {
  inviteChat.title = titleRoom
  inviteChat.uuid = uuidRoom
  inviteChat.roomId = roomId
  inviteChat.userUuid = userUuid === uuidUser.value
  inviteChat.adminId = adminId

  if (inviteChat.title && inviteChat.uuid && inviteChat.userUuid) {
    isInviteRoom.value = true
    setTimeout(() => (isInviteRoom.value = false), 5000)
  }
})

const { enterChat } = useEnterChat()
</script>

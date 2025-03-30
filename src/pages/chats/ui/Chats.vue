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
          @close-notification="closeNotification"
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
import { useI18n } from '#imports'

useSeoMeta({
  title: 'Список чатов',
  description: 'Выбор чата из списка'
})

const { t } = useI18n({ useScope: 'global' })

const isInviteRoom = ref(false)
const inviteChat = reactive({
  title: '',
  uuid: '',
  userUuid: false,
  roomId: null,
  adminId: 0
})

const closeNotification = () => (isInviteRoom.value = false)

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

// watch(
//   () => props.isInviteRoom,
//   (newValue) => {
//     if (newValue) {
//       const audio = new Audio('@public/sound/notification_sound.mp3')
//       audio.play().catch((e) => console.error('Ошибка воспроизведения:', e))
//     }
//   }
// )
</script>

<template>
  <MainLayout>
    <div class="min-h-screen flex justify-center items-center">
      <div class="text-white rounded-md p-1 text-1xl bg-black">Выберите чат</div>
      <div c v-if="isInviteRoom">
        <Notification
          :is-invite-room="isInviteRoom"
          :chatTitle="inviteChat.title"
          @enter-chat="
            enterChat(inviteChat.uuid, inviteChat.title, inviteChat.roomId, closeNotification)
          "
          @close-notification="closeNotification"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { MainLayout } from '@/shared/ui/layouts/main'
import { SOCKETS } from '@/shared/api'
import { reactive, ref } from 'vue'
import { Notification } from '@/entities/chat'
import Cookies from 'js-cookie'
import { useEnterChat } from '@/shared/lib/hooks'

// if (!isValidToken()) router.push('/')

const router = useRouter()

const isInviteRoom = ref(false)
const inviteChat = reactive({
  title: '',
  uuid: '',
  userUuid: false,
  roomId: null
})

const closeNotification = () => (isInviteRoom.value = false)

SOCKETS.emit('personalInvite', Cookies.get('uuid'))

SOCKETS.on('messageInvite', async (uuidRoom, titleRoom, userUuid, roomId) => {
  inviteChat.title = titleRoom
  inviteChat.uuid = uuidRoom
  inviteChat.roomId = roomId
  inviteChat.userUuid = userUuid === Cookies.get('uuid')

  if (inviteChat.title && inviteChat.uuid && inviteChat.userUuid) {
    isInviteRoom.value = true
    setTimeout(() => (isInviteRoom.value = false), 5000)
  }
})

const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()
</script>

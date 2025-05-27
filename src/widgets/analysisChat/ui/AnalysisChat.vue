<template>
  <section class="flex flex-col h-full">
    <section>
      <h1 class="text-3xl font-bold">{{ chat.roomName }}</h1>
      <p class="mt-4">{{ chat.description }}</p>
      <section class="mt-4">
        <Button
          v-if="userId ? +userId === chat.userId : null"
          @click="openAddUser"
          class="gap-2"
          :is-rounded-lg="true"
        >
          {{ t('inviteUsers') }}
          <AddUsersIcon />
        </Button>
      </section>
      <p class="h-[0.5px] mt-4 bg-[#1c1c1c]" />
      <section class="mt-12" v-if="analiseData?.chatTextLength">
        <h2 class="text-2xl">{{ t('analiseChat') }}:</h2>
        <div class="mt-4 grid grid-cols-3 gap-1">
          <div>
            <Doughnut class="chart" :options="options" :data="chartData" :key="chartKey" />
          </div>
          <StatisticsTable
            :chat-file-length="analiseData.chatFileLength"
            :chat-text-length="analiseData.chatTextLength"
          />
        </div>
      </section>
      <p v-else>Статистики пока нету</p>
      <AnaliseChatByMonth
        v-if="analiseData?.analiseOfMounth"
        :analiseChatByMounth="analiseData.analiseOfMounth"
      />
    </section>
    <section class="mt-auto ml-auto flex gap-2">
      <template v-if="checkUserId">
        <Button @click="$emit('closeModal')" class="w-32" color="primary" :is-rounded-lg="true">
          {{ t('close') }}
        </Button>
        <Button @click="openConfirmDeleteChat" class="w-32" color="danger" :is-rounded-lg="true">
          {{ t('deleteChat') }}
        </Button>
      </template>
      <template v-else>
        <Button
          @click="deleteCurrentChat(chat.id)"
          class="w-32"
          color="danger"
          :is-rounded-lg="true"
        >
          {{ t('logoutChat') }} {{ chatsStore.currentLoginChat }}
        </Button>
      </template>
    </section>
    <ConfirmDeleteChatModal
      :is-open-modal="isOpenConfirmDeleteChat"
      :chatId="chat.id"
      @closeModal="closeConfirmDeleteChat"
      @deleteCurrentChat="deleteCurrentChat"
    />
    <InviteUsers
      :is-open-add-user="isOpenAddUser"
      :users="userStore.users"
      :chatName="chat.roomName"
      :chatUuid="chat.uuid"
      :chat
      @close-add-user="closeAddUser"
    />
  </section>
</template>

<script setup lang="ts">
import AddUsersIcon from '~/shared/assets/icons/AddUsersIcon.vue'
import { ConfirmDeleteChatModal } from '~/features/chat'
import { Button } from '~/shared/ui/button'
import { useToggleModal } from '~/shared/lib/hooks'
import { useUsersStore } from '~/entities/user'
import { useChatsStore, deleteChatByIndex, type TAnaliseChat } from '~/entities/chat'
import { InviteUsers } from '../../inviteUsers'
import { useRouter } from 'vue-router'
import { Doughnut } from 'vue-chartjs'
import { onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { type TChat } from '~/shared/types'
import { useChartChat } from '~/entities/chat'
import { StatisticsTable } from '~/entities/chat'
import { ApiChat } from '~/entities/chat'
import { AnaliseChatByMonth } from '~/entities/chat'
import { SOCKETS } from '~/shared/api'
import { useLoginChatState } from '~/entities/user/model/useLoginChatState'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps<{ chat: TChat }>()
defineEmits(['closeModal'])

const {
  isOpenModal: isOpenConfirmDeleteChat,
  closeModal: closeConfirmDeleteChat,
  openModal: openConfirmDeleteChat
} = useToggleModal()

const {
  isOpenModal: isOpenAddUser,
  closeModal: closeAddUser,
  openModal: openAddUser
} = useToggleModal()

const userId = useCookie('userId')
const userUuid = useCookie('uuid')

const router = useRouter()

const userLoginChat = useLoginChatState()

const analiseData = ref<TAnaliseChat>()

const data = reactive({
  fileLength: 0,
  textLength: 0
})

const chatsStore = useChatsStore()
const userStore = useUsersStore()

userStore.getUsers()

const closeChatByUuid = () => {
  SOCKETS.emit('closeChatByUuid', {
    adminId: +props.chat.adminId,
    userUuid: userUuid.value
  })
}

const checkUserId = computed(() => {
  return userId.value && +userId.value === props.chat.userId
})

onMounted(() => {
  ApiChat.getAnaliseChat(props.chat.id).then((res) => {
    if ('chatFileLength' in res && 'chatTextLength' in res) {
      analiseData.value = res

      data.fileLength = res.chatFileLength
      data.textLength = res.chatTextLength
    }
  })
})

const { chartData, options, chartKey } = useChartChat(data)

const deleteCurrentChat = (id: number) => {
  const currentLoginChat = useCookie('currentLoginChat')

  console.log('currentLoginChat', currentLoginChat.value)

  closeChatByUuid()

  // if (userLoginChat.value) {
  //   chatsStore.removeChat(userLoginChat.value ? +userLoginChat.value : 0)
  //   userStore.deleteChat(userLoginChat.value ? +userLoginChat.value : 0)
  // }
  if (chatsStore.currentLoginChat) {
    if (userId?.value) userStore.getUser(+userId.value)
    chatsStore.removeChat(chatsStore.currentLoginChat)
    // userStore.deleteChat(currentLoginChat.value ? +currentLoginChat.value : 0)
    userStore.user.chats = userStore.user.chats.filter(
      (chat) => chat.id !== chatsStore.currentLoginChat
    )
  }

  closeConfirmDeleteChat()
  router.push('/chats')
}

const currentLoginChat = useCookie('currentLoginChat')
const deleteCurrentChatow = (id: number) => {
  closeChatByUuid()

  chatsStore.removeChat(currentLoginChat.value ? +currentLoginChat.value : 0)
  userStore.deleteChat(id)
  // deleteChatByIndex({ chats: userStore.user.chats, id })
  if (userId?.value) userStore.getUser(+userId.value)
  closeConfirmDeleteChat()
  router.push('/chats')
}
</script>

<style scoped>
@import url('style.module.scss');
</style>

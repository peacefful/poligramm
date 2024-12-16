<template>
  <section class="flex flex-col h-full">
    <div>
      <h1 class="text-3xl font-bold">{{ chat.roomName }}</h1>
      <p class="mt-4">{{ chat.description }}</p>
      <div class="mt-12">
        <h2 class="text-2xl">Анализ чата:</h2>
        <div class="mt-4 grid grid-cols-3 gap-1">
          <div>
            <Doughnut class="chart" :options="options" :data="chartData1" />
          </div>
          <div>
            <Doughnut class="chart" :options="options" :data="chartData2" />
          </div>
          <div>
            <Doughnut class="chart" :options="options" :data="chartData2" />
          </div>
        </div>
      </div>
      <div class="h-[0.5px] mt-4 bg-slate-400"></div>
      <div class="mt-4">
        <Button @click="openAddUser" class="gap-2" :is-rounded-lg="true">
          Пригласить пользователей <AddUsersIcon />
        </Button>
      </div>
    </div>
    <div class="mt-auto ml-auto flex gap-2">
      <Button @click="$emit('closeModal')" class="w-32" color="primary" :is-rounded-lg="true">
        Закрыть
      </Button>
      <Button @click="openConfirmDeleteChat" class="w-32" color="danger" :is-rounded-lg="true">
        Удалить чат
      </Button>
    </div>
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
import { type TChat } from '@/shared/types'
import { Doughnut } from 'vue-chartjs'
import { Button } from '@/shared/ui/button'
import { ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useToggleModal } from '@/shared/lib/hooks'
import { useUsersStore } from '@/entities/user'
import { useChatsStore, deleteChatByIndex } from '@/entities/chat'
import { useRouter } from 'vue-router'
import { storage } from '@/shared/lib/utils'
import { ConfirmDeleteChatModal } from '@/features/chat'
import { InviteUsers } from '../inviteUsers'
import AddUsersIcon from '@/shared/assets/icons/AddUsersIcon.vue'

defineProps<{ chat: TChat }>()
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

const userId: string | null = storage.getData('id')

const chatsStore = useChatsStore()
const userStore = useUsersStore()

userStore.getUsers()

const router = useRouter()

const deleteCurrentChat = (id: number) => {
  chatsStore.removeChat(id)
  deleteChatByIndex({ chats: userStore.user.chats, id })
  userStore.getUser(userId !== null ? +userId : 0)
  closeConfirmDeleteChat()
  router.push('/chats')
}

ChartJS.register(Tooltip, Legend, ArcElement)

const chartData1 = ref({
  labels: ['Text', 'Files', 'Others'],
  datasets: [
    {
      backgroundColor: ['#242424', '#bc0ce8', '#279eff'],
      data: [50, 2, 27]
    }
  ]
})

const chartData2 = ref({
  labels: ['Images', 'Videos'],
  datasets: [
    {
      backgroundColor: ['#242424', '#279eff'],
      data: [30, 10]
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<style scoped>
@import url('./style.module.scss');
</style>

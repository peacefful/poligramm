<template>
  <section class="flex flex-col h-full">
    <div>
      <h1 class="text-3xl font-bold">{{ chat.roomName }}</h1>
      <p class="mt-4">{{ chat.description }}</p>
      <div class="mt-12" v-if="analiseData.textLength">
        <h2 class="text-2xl">{{ t('analiseChat') }}:</h2>
        <div class="mt-4 grid grid-cols-3 gap-1">
          <div>
            <Doughnut class="chart" :options="options" :data="chartData1" :key="chartKey" />
          </div>
          <table>
            <thead>
              <tr>
                <th class="dark:bg-[#1c1c1c]">Категории</th>
                <th class="dark:bg-[#1c1c1c]">Количество</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Текстовые сообщения</td>
                <td>{{ analiseData.textLength }}</td>
              </tr>
              <tr>
                <td>Файловые сообщения</td>
                <td>{{ analiseData.fileLength }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>Статистики пока нету</div>
      <div class="h-[0.5px] mt-4 bg-slate-400"></div>
      <div class="mt-4">
        <Button
          v-if="userId ? +userId === chat.userId : null"
          @click="openAddUser"
          class="gap-2"
          :is-rounded-lg="true"
        >
          {{ t('inviteUsers') }}
          <AddUsersIcon />
        </Button>
      </div>
    </div>
    <div v-if="userId ? +userId === chat.userId : null" class="mt-auto ml-auto flex gap-2">
      <Button @click="$emit('closeModal')" class="w-32" color="primary" :is-rounded-lg="true">
        {{ t('close') }}
      </Button>
      <Button @click="openConfirmDeleteChat" class="w-32" color="danger" :is-rounded-lg="true">
        {{ t('deleteChat') }}
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
import { onMounted, reactive, ref, watch } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useToggleModal } from '@/shared/lib/hooks'
import { useUsersStore } from '@/entities/user'
import { useChatsStore, deleteChatByIndex } from '@/entities/chat'
import { useRouter } from 'vue-router'
import { storage } from '@/shared/lib/utils'
import { ConfirmDeleteChatModal } from '@/features/chat'
import { InviteUsers } from '../inviteUsers'
import AddUsersIcon from '@/shared/assets/icons/AddUsersIcon.vue'
import { http } from '@/shared/api'
import { useI18n } from 'vue-i18n'

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

const analiseData = reactive({
  fileLength: 0,
  textLength: 0
})

ChartJS.register(Tooltip, Legend, ArcElement)

const fetchChat = async (): Promise<void | Error> => {
  try {
    const analiseChat = (await http.post(`/api/analise/${props.chat.id}`)).data

    analiseData.fileLength = analiseChat.fileLength
    analiseData.textLength = analiseChat.textLength
  } catch (error) {
    return new Error('Error fetching chat')
  }
}

onMounted(() => fetchChat())

console.log(analiseData)

const chartData1 = ref({
  labels: [t('textMessage'), t('files')],
  datasets: [
    {
      backgroundColor: ['#242424', '#bc0ce8'],
      data: [analiseData.textLength, analiseData.fileLength]
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}

const chartKey = ref(0)

watch(
  () => [analiseData.textLength, analiseData.fileLength],
  ([textLength, fileLength]) => {
    chartData1.value.datasets[0].data = [textLength, fileLength]
    chartKey.value += 1
  }
)
</script>

<style scoped>
@import url('./style.module.scss');


</style>

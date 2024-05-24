<template>
  <div class="chat">
    <div class="chat-dashboard">
      <div class="chat-dashboard__wpapper">
        <div @click="$emit('closeChat')" class="chat-dashboard__toogle-menu">
          <img src="../assets/icons/arrow.svg" alt="" />
        </div>
        <h2>{{ name }}</h2>
        <Dropdown @toogle-menu="toogleDropdown" :is-open-menu="isOpenMenu" :menu="chatMenu" />
      </div>
    </div>
    <Modal
      @closeModal="closeModal"
      @submit-modal="sendInvitation(uuids, chat.uuid, chat.name)"
      :title="t('selectUser')"
      :is-open-modal="isOpenModal"
      :title-success-button="t('add')"
      :error="error"
    >
      <div class="mb-5">
        <Input class="p-3" v-model:value="findUser" />
        <div
          class="modal-form__users"
          v-for="user in filterUsers(usersStore.allUsers, findUser)"
          :key="user.id"
        >
          <label class="chat-modal__user" :for="user.name">
            {{ user.name }} {{ user.surname }} ({{ user.rank }})
            <input
              v-model="uuids"
              :id="user.name"
              :value="user.uuid"
              class="h-5 w-5"
              type="checkbox"
            />
          </label>
        </div>
      </div>
    </Modal>
    <div>
      <div class="p-2">
        <div class="text-center p-2">{{ t('welcome') }} {{ userMessage.username }}</div>
        <Messages :messages="messages" />
      </div>
      <form class="chat-form" autocomplete="off" @submit.prevent="sendMessage()">
        <textarea
          @keydown.enter.prevent="sendMessage"
          :placeholder="t('messengerInputPlaceholder')"
          v-model="userMessage.text"
        />
        <InputImg :src="paperClipIcon" type="file" />
        <InputImg :src="sendMessageIcon" type="submit" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Messages from './Messages.vue'
import Dropdown from './ui/Dropdown.vue'
import Input from './ui/Input.vue'
import InputImg from './ui/InputImg.vue'
import Modal from './ui/Modal.vue'
import paperClipIcon from '@/assets/icons/paperClip.svg'
import sendMessageIcon from '@/assets/icons/sendMessage.svg'
import { useToogleMenu } from '@/hooks/useToogle'
import { useToogleModal } from '@/hooks/useToogle'
import type { IMenu } from '@/interfaces/iMenu'
import type { IMessage } from '@/interfaces/iMessage'
import { useUsersStore } from '@/stores/UsersStore'
import { filterUsers } from '@/utils/filterDatas'
import socket from '@/utils/socket'
import { storage } from '@/utils/storage'

const { t } = useI18n({ useScope: 'global' })

const chat = defineProps<{
  name: string
  uuid: string
}>()
defineEmits(['closeChat'])

const userMessage: IMessage = reactive({
  text: '',
  id: Number(storage.getData('id')),
  sendTime: dayjs().format('HH:mm'),
  uuid: chat.uuid,
  username: storage.getData('username'),
  joinUser: []
})

const messages = ref<IMessage[]>([])
const findUser = ref<string>('')

const usersStore = useUsersStore()
usersStore.getUsersData()

const uuids = ref<string[]>([])
const error = ref<boolean>(false)

const sendInvitation = (usersUuids: string[], uuidRoom: string, titleRoom: string) => {
  if (usersUuids.length) {
    usersUuids.forEach((userUuid) => {
      socket.emit('personalInvite', userUuid)
      socket.emit('messageInvite', { uuidRoom, titleRoom, userUuid })
      socket.emit('personalInvite', storage.getData('uuid'))
    })

    error.value = false
    uuids.value = []

    closeModal()
  } else {
    error.value = true
  }
}

const isOpenMenu = ref<boolean>(false)
const menuTarget = ref<HTMLElement | null>(null)

const { toogle: toogleDropdown } = useToogleMenu(isOpenMenu, menuTarget)
const { openModal, closeModal, isOpenModal } = useToogleModal()

const chatMenu = ref<IMenu[]>([{ title: 'addUsers', onClick: openModal }])

const sendMessage = () => {
  if (userMessage.text.trim()) {
    socket.emit('message', ...Object.values(userMessage))
    userMessage.text = ''
  }
}

socket.on('message', (text, id, sendTime, uuid, username) => {
  messages.value.push({ text, id, sendTime, username })
  requestAnimationFrame(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
})

socket.emit('join', chat.uuid)
socket.emit('userJoin', chat.uuid, userMessage.username)

socket.on('userJoin', (username) => {
  const copyUserMessage = { ...userMessage }
  copyUserMessage.id = 0
  copyUserMessage.text = username
  messages.value.push(copyUserMessage)
})
</script>

<style scoped lang="scss">
.chat {
  @apply flex flex-col justify-between min-h-full text-xl;

  &-dashboard {
    @apply bg-blue-900 sticky top-0 p-2;

    .chat-dashboard__wpapper {
      @apply flex items-center justify-between;

      .chat-dashboard__toogle-menu {
        @apply rounded-full active:bg-[#3090df] ease-in duration-100 cursor-pointer;
      }
    }
  }

  &-form {
    @apply flex justify-center w-full bg-blue-900 p-3 sticky bottom-0;
  }

  &-modal__user {
    @apply flex justify-between items-center mt-5;
  }
}
</style>
@/shared/types/iMessage@/shared/types/iMenu

<template>
  <!-- <div class="chats" v-if="showChats === true">
    <h1 class="chats__title">{{ t('chatsList') }}</h1>
    <div class="mx-2">
      <div class="chats__dashboard">
        <div
          @click="toogleAside"
          class="mr-auto rounded-full p-1 active:bg-[#3090df] ease-in duration-100 block ng:hidden"
        >
          <img src="@/assets/icons/burger-menu.svg" />
        </div>
        <transition name="fade">
          <div v-if="isOpenAside" class="chats__aside-wrap wrapper">
            <Aside class="fade-aside" />
          </div>
        </transition>
        <Input class="p-3 w-56 mr-1" bg="#0054A8" v-model:value="findChat" />
        <Dropdown @toogle-menu="toogleDropdown" :is-open-menu="isOpenMenu" :menu="chatListMenu" />
        <Modal
          @submit-modal="addChat(newChat)"
          @closeModal="closeModal"
          :is-open-modal="isOpenModal"
          :title="t('fillField')"
          :title-success-button="t('create')"
        >
          <Input class="p-3" v-model:value="newChat" :placeholder="t('chatName')" />
        </Modal>
      </div>
      <div v-if="usersStore?.user?.chats?.length">
        <ul
          class="mt-4"
          v-for="chat in filterChats(usersStore.user.chats, findChat)"
          :key="chat.id"
        >
          <li class="chat__list">
            {{ chat.roomName }}
            <div class="flex w-20 justify-between">
              <img
                :title="t('goChat')"
                @click="enterChat(chat.uuid, chat.roomName)"
                src="@/assets/icons/chat.svg"
              />
              <img
                :title="t('delete')"
                @click="deleteChat(chat.id)"
                src="@/assets/icons/trash.svg"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-6" v-else>Чатов пока нет.</div>
    </div>
  </div>
  <Chat @close-chat="closeChat" :uuid="uuid" :name="room" v-else /> -->
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, blanditiis commodi. Sint, suscipit? Incidunt, quod, illo dolore quisquam autem, quasi animi deleniti explicabo alias consequatur assumenda optio modi. In, quis!
</template>

<script setup lang="ts">
// import Chat from '@/components/Chat.vue'
// import Dropdown from '@/components/ui/Dropdown.vue'
// import Input from '@/components/ui/Input.vue'
// import Modal from '@/components/ui/Modal.vue'
// import Aside from '@/components/layout/Aside.vue'
// import { ref, onMounted } from 'vue'
// import { useUsersStore } from '@/stores/UsersStore'
// import { addChat } from '@/api/chats'
// import { deleteChat } from '@/api/chats'
// import { filterChats } from '@/utils/filterDatas'
// import { useEnterChat } from '@/hooks/useEnter'
// import { useToogleMenu, useToogleModal } from '@/hooks/useToogle'
// import { useI18n } from 'vue-i18n'
// import type { IMenu } from '@/interfaces/iMenu'

// const { t } = useI18n({ useScope: 'global' })

// const usersStore = useUsersStore()
// usersStore.getUserData()

// onMounted(() => {
//   window.addEventListener('resize', () => {
//     if (window.innerWidth >= 1400) {
//       isOpenAside.value = false
//     }
//   })
// })

// const newChat = ref<string>('')
// const findChat = ref<string>('')

// const isOpenAside = ref<boolean>(false)
// const isOpenMenu = ref<boolean>(false)

// const asideTarget = ref<HTMLElement | null>(null)
// const menuTarget = ref<HTMLElement | null>(null)

// const { toogle: toogleAside } = useToogleMenu(isOpenAside, asideTarget)
// const { toogle: toogleDropdown } = useToogleMenu(isOpenMenu, menuTarget)

// const { openModal, closeModal, isOpenModal } = useToogleModal()
// const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()

// const chatListMenu = ref<IMenu[]>([{ title: 'createChat', onClick: openModal }])
</script>

<style>
@import url("./style.module.scss");
</style>

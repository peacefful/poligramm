<template>
  <form class="flex flex-col dark:bg-[#0f0f0f]" @submit.prevent="submitChat">
    <div class="flex items-center mb-2">
      <InputFile class="p-3 mr-4" type="file">
        <ImageIcon />
      </InputFile>
      <DefaultInput class="w-full" :placeholder="t('chatName')" v-model.trim="dataChat.roomName" />
    </div>
    <Textarea
      class="w-full my-3 p-2 h-24 border border-black/10 rounded-md dark:bg-[#212121]"
      :placeholder="t('description')"
      v-model.trim="dataChat.description"
    />
    <div class="flex gap-3 ml-auto mt-5">
      <Button
          @click="$emit('close-modal')"
          :is-rounded-lg="true"
          color="primary"
          type="reset"
      >
        {{ t('close') }}
      </Button>
      <Button type="submit" :is-rounded-lg="true">
        {{ t('create') }}
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { ApiChat, type TCreateChat } from '@/entities/chat'
import { useUsersStore } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import { type TChat } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { DefaultInput } from '@/shared/ui/input'
import { InputFile } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import ImageIcon from '@/shared/assets/icons/ImageIcon.vue'

const { t } = useI18n({ useScope: 'global' })

const chatFormEmit = defineEmits(['close-modal'])

const dataChat: TCreateChat = reactive({
  roomName: '',
  description: ''
})

const userId = useCookie('userId')
const userStore = useUsersStore()

const submitChat = async () => {
  const chat: TChat | Error = await ApiChat.createChat(dataChat)
  chat && chatFormEmit('close-modal'), userStore.getUser(userId.value !== null ? +userId.value : 0)
}
</script>

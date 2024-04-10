<template>
  <form class="flex flex-col justify-between" @submit.prevent="submitChat">
    <div class="flex items-center mb-2">
      <button class="bg-default p-4 rounded-full mr-4">
        <ImageIcon />
      </button>
      <DefaultInput class="w-full" :placeholder="t('chatName')" v-model.trim="chatName" />
    </div>
    <Textarea class="w-full my-3 h-24" placeholder="Описание(необязательно)" />
    <div class="flex gap-3 ml-auto">
      <Button @click="$emit('close-modal')" color="primary" type="reset" :title="t('close')" />
      <Button type="submit" :title="t('create')" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { ApiChat } from '@/entities/chat'
import { DefaultInput } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { type TChat } from '@/shared/types'
import ImageIcon from '@/shared/assets/icons/ImageIcon.vue'
import { useChatsStore } from '@/entities/chat'

const { t } = useI18n({ useScope: 'global' })

const chatFormEmit = defineEmits(['close-modal'])

const chatName = ref<string>('')

const chatsStore = useChatsStore()

const submitChat = async () => {
  const chat: TChat | Error = await ApiChat.createChat(chatName.value)
  chat && chatFormEmit('close-modal'), chatsStore.getChats()
}
</script>

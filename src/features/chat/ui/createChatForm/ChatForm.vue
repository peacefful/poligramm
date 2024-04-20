<template>
  <form class="flex flex-col" @submit.prevent="submitChat">
    <div class="flex items-center mb-2">
      <InputFile class="p-3 mr-4" type="file">
        <ImageIcon />
      </InputFile>
      <DefaultInput 
        class="w-full" 
        :placeholder="t('chatName')" 
        v-model.trim="chatName" 
      />
    </div>
    <Textarea 
      class="w-full my-3 h-24 border-[1px] rounded-md" 
      placeholder="Описание(необязательно)" 
    />
    <div class="flex gap-3 ml-auto mt-auto">
      <Button 
        @click="$emit('close-modal')"
        :is-rounded-lg="true"
        color="primary" 
        type="reset"
      >
        {{ t('close') }}
      </Button>
      <Button 
        type="submit" 
        :is-rounded-lg="true"
      >
        {{ t('create') }}
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { ApiChat } from '@/entities/chat'
import { DefaultInput } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { useChatsStore } from '@/entities/chat'
import { InputFile } from '@/shared/ui/input'
import { type TChat } from '@/shared/types'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import ImageIcon from '@/shared/assets/icons/ImageIcon.vue'

const { t } = useI18n({ useScope: 'global' })

const chatFormEmit = defineEmits(['close-modal'])

const chatName = ref<string>('')

const chatsStore = useChatsStore()

const submitChat = async () => {
  const chat: TChat | Error = await ApiChat.createChat(chatName.value)
  chat && chatFormEmit('close-modal'), chatsStore.getChats()
}
</script>

<template>
  <InputFile
    @on-file-change="onFileChange"
    type="file"
    class="p-2 mr-4 hover:rotate-90 ease-in duration-150"
  >
    <UploadFileIcon />
  </InputFile>
</template>

<script setup lang="ts">
import { getFileView, setFileToStorage } from '@/entities/chat/api'
import { InputFile } from '@/shared/ui/input'
import UploadFileIcon from '@/shared/assets/icons/UploadFileIcon.vue'
import { ref } from 'vue'
import { sendMessage } from '@/entities/chat/api'
import { useMessagesStore } from '@/entities/chat'

const currentFileUrl = ref('')

const messagesStore = useMessagesStore()

const onFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target.files !== null) {
    const uploadedFile = await setFileToStorage(target.files[0])
    if (uploadedFile) {
      currentFileUrl.value = await getFileView(uploadedFile?.$id)
      messagesStore.messagesData.file = currentFileUrl.value

      messagesStore.messagesData.userId = +messagesStore.messagesData.userId

      sendMessage(messagesStore.messagesData, messagesStore.messagesData.chatId)
    }
  }
}
</script>

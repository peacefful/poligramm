<template>
  <form
    autocomplete="off"
    @submit.prevent="" 
    class="sticky bottom-0 mx-20 mb-3 flex justify-center items-center rounded-2xl bg-white px-6 "
  >
    <SendFileButton/>
    <Textarea class="w-full pt-5" placeholder="Наберите сообщение..." />
    <SendMessageButton/>
  </form>
</template>

<script setup lang="ts">
import { Textarea } from '@/shared/ui/textarea'
import { SendFileButton } from '@/features/chat';
import { SendMessageButton } from '@/features/chat';
</script>

<template>
  <MainLayout>
    <div class="min-h-screen flex flex-col">
      <div class="flex-grow"></div>
      <SendMessageForm/>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { MainLayout } from '@/shared/ui/layouts/Main'
import { SendMessageForm } from '@/widgets/sendMessageForm'
</script>
<template>
  <Button @click="$emit('send-message')" :is-rounded-full="true">
    <SendMessageIcon />
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import SendMessageIcon from '@/shared/assets/icons/SendMessageIcon.vue'

defineEmits(['send-message'])
</script>
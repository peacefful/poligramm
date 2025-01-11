<template>
  <Button @click="$emit('send-message')" :is-rounded-full="true">
    <SendMessageIcon />
  </Button>
</template>

<script setup lang="ts">
import SendMessageIcon from '@/shared/assets/icons/SendMessageIcon.vue'
import { Button } from '@/shared/ui/button'

defineEmits(['send-message'])
</script>

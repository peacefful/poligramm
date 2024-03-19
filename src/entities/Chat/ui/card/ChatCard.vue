<template>
  <div>
    {{ chat.roomName }}
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IChat } from '../../model'

interface IChatProps {
  chat: IChat
}

defineProps<IChatProps>()
</script>

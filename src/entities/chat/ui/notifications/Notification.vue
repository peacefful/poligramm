<template>
  <div v-if="isInviteRoom" class="notification">
    <div class="notification__wrapper">
      <p>{{ t('inviteToChat') }} "{{ chatTitle }}"</p>
      <button @click.prevent="$emit('closeNotification')" class="notification__close">
        <CloseIcon />
      </button>
    </div>
    <Button class="mt-5" :is-rounded-lg="true" color="primary" @click="$emit('enterChat')">
      {{ t('signIn') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/shared/ui/button'
import CloseIcon from '@/shared/assets/icons/CloseIcon.vue'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  chatTitle: string
  isInviteRoom: boolean
}>()

defineEmits(['enterChat', 'closeNotification'])
</script>

<style scoped lang="scss">
.notification {
  @apply fixed bottom-0 right-0 bg-default text-white p-6 rounded-t-lg w-full sm:w-[400px];
  &__wrapper {
    @apply flex justify-between items-center;
    .notification__close {
      @apply hover:bg-zinc-700 p-2 rounded-full transition ease-in duration-100;
    }
  }
}
</style>

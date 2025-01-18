<template>
  <article v-if="isInviteRoom" class="notification">
    <div class="notification__wrapper">
      <p>{{ t('inviteToChat') }} "{{ chatTitle }}"</p>
      <button @click.prevent="$emit('closeNotification')" class="notification__close">
        <CloseIcon />
      </button>
    </div>
    <Button class="mt-5" :is-rounded-lg="true" color="primary" @click="$emit('enterChat')">
      {{ t('signIn') }}
    </Button>
  </article>
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
@use "./style.module.scss";
</style>

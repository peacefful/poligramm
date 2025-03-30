<template>
  <audio v-if="isInviteRoom" autoplay hidden controls>
    <source src="@public/sound/notification_sound.mp3" type="audio/mpeg" />
  </audio>
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
import { useAudioUnlock } from '@/entities/chat/lib'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps<{
  chatTitle: string
  isInviteRoom: boolean
}>()

defineEmits(['enterChat', 'closeNotification'])

const { isAudioUnlocked } = useAudioUnlock()

watch(
  () => props.isInviteRoom,
  (newValue) => {
    if (newValue && isAudioUnlocked.value) {
      const audio = new Audio('/sound/notification_sound.mp3')
      audio.play().catch((e) => console.error('Ошибка воспроизведения:', e))
    }
  }
)
</script>

<style scoped lang="scss">
@use './style.module.scss';
</style>

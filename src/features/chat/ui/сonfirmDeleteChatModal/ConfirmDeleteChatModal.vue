<template>
  <Modal @close-modal="$emit('closeModal')" :is-open-modal="isOpenModal">
    <h3>{{ t('confirmDelete') }}</h3>
    <div class="flex justify-center gap-3 mt-4">
      <Button
        @click="$emit('deleteCurrentChat', chatId)"
        class="w-20"
        color="primary"
        :is-rounded-lg="true"
      >
        {{ t('yes') }}
      </Button>
      <Button @click="$emit('closeModal')" class="w-20" :is-rounded-lg="true">
        {{ t('no') }}
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from '@/shared/ui/modal'
import { Button } from '@/shared/ui/button'
import { type TConfirmDeleteChat } from '@/entities/chat'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

defineProps<TConfirmDeleteChat>()

defineEmits(['closeModal', 'deleteCurrentChat'])
</script>

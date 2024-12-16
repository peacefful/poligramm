<template>
  <Modal @close-modal="$emit('closeModal')" :is-open-modal="isOpenModal">
    <h3>Вы уверены что хотите удалить данный чат?</h3>
    <div class="flex justify-center gap-3 mt-4">
      <Button
        @click="$emit('deleteCurrentChat', chatId)"
        class="w-20"
        color="primary"
        :is-rounded-lg="true"
      >
        Да
      </Button>
      <Button 
        @click="$emit('closeModal')" 
        class="w-20" 
        :is-rounded-lg="true"
      >
        Нет 
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from '@/shared/ui/modal';
import { Button } from '@/shared/ui/button';
import { type TConfirmDeleteChat } from '@/entities/chat';

defineProps<TConfirmDeleteChat>()

defineEmits(['closeModal', 'deleteCurrentChat'])
</script>

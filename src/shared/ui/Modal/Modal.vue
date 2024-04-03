<template>
  <transition>
    <div v-if="isOpenModal" class="modal-form">
      <form class="modal-form__box" @submit.prevent="$emit('submitModal')">
        <div>
          <h3 class="modal-form__title">{{ title }}</h3>
          <slot></slot>
        </div>
        <div>
          <Button class="mt-10" :title="titleSuccessButton" />
          <Button
            @click.prevent="$emit('closeModal')"
            class="ml-3"
            color="danger"
            :title="t('close')"
          />
          <div v-if="error" class="text-red-600 mt-2">
            {{ t('errorSelectUsers') }}
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  isOpenModal: boolean
  error?: boolean
  title: string
  titleSuccessButton: string
}>()

defineEmits(['closeModal', 'submitModal'])
</script>

<style scoped>
@import url('./style.module.scss');
</style>

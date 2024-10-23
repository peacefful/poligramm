<template>
  <transition>
    <!-- @keyup.esc="$emit('closeModal')" -->
    <div 
      @click.self="$emit('closeModal')"
      v-if="isOpenModal"
      class="modal-form"
    >
      <div class="modal-form__box">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
type TModal = {
  isOpenModal: boolean
}

defineProps<TModal>()

const modalEmit = defineEmits(['closeModal'])
</script>

<style scoped>
@import url('./style.module.scss');
</style>

<template>
  <transition>
    <div v-if="isOpenModal" class="modal-form">
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
</script>

<style scoped>
@import url('./style.module.scss');
</style>

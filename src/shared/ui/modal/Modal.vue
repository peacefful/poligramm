<template>
  <transition>
    <div
        v-if="isOpenModal"
        class="fixed inset-0 flex items-center justify-center h-screen w-full bg-black/70 overflow-y-auto z-30"
        @click.self="$emit('closeModal')"
    >
      <div
          v-bind="$attrs"
          class="p-6 bg-white dark:bg-[#0f0f0f] rounded-lg overflow-y-auto "
      >
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>

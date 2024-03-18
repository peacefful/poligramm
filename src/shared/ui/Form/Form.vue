<template>
  <form @submit.prevent="" class="form">
    <h1 class="text-5xl">{{ t(title) }}</h1>
    <div class="form__labels">
      <slot />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

interface IForm {
  title: string
}

defineProps<IForm>()
</script>

<style scoped>
@import url('./style.module.scss');
</style>

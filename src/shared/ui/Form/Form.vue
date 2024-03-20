<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <h1 class="text-5xl">{{ t(title) }}</h1>
    <div class="form__labels">
      <slot />
    </div>
    <Button type="submit" class="mt-7" :title="t(buttonTitle)" />
  </form>
  <slot />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

interface IForm {
  handlerSubmit: (e: Event) => Promise<void>
  title: string
  buttonTitle: string
}

defineProps<IForm>()
</script>

<style scoped>
@import url('./style.module.scss');
</style>

<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <h1 class="text-5xl w-80">
      {{ t(title, 0) }}
    </h1>
    <div class="form__labels">
      <slot name="labels" />
    </div>
    <Button 
      type="submit" 
      class="mt-7" 
      :title="t(buttonTitle, 3)" 
    />
    <div class="text-center mt-10 opacity-75">
      <slot name="hint" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/shared/ui/button'

const { t } = useI18n({ useScope: 'global' })

interface IForm {
  handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>
  title: string
  buttonTitle: string
}

defineProps<IForm>()
</script>

<style scoped>
@import url('./style.module.scss');
</style>

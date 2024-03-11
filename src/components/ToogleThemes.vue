<template>
  <div class="flex justify-between">
    <h2>{{ t('updateTheme') }}</h2>
    <div class="flex flex-wrap justify-end w-[120px]">
      <InputRadio input-id="optionSilver" color="#777" />
      <InputRadio input-id="optionGreen" color="#009C3F" />
      <InputRadio input-id="optionYellow" color="#AD9100" />
      <InputRadio input-id="optionRed" color="#934700" />
      <InputRadio input-id="optionBlue" color="#0054A8" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputRadio from './ui/InputRadio.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped lang="scss">
input[type='radio']:checked + label::before {
  content: '✔';
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

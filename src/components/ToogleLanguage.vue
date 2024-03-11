<template>
  <div class="flex justify-between items-center">
    <h2>{{ t('language') }}</h2>
    <div class="flex">
      <input v-model="radio" type="radio" class="hidden" value="RU" id="ru" name="radioGroup" />
      <label
        @click="updateLocale('ru')"
        :class="[locale === 'ru' ? 'select-lang' : '']"
        for="ru"
        class="mr-3"
      >
        RU
      </label>
      <input v-model="radio" type="radio" value="KZ" class="hidden" id="kz" name="radioGroup" />
      <label @click="updateLocale('kz')" :class="[locale === 'kz' ? 'select-lang' : '']" for="kz">
        KZ
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { storage } from '@/utils/storage'

const { t, locale } = useI18n({ useScope: 'global' })

const updateLocale = (newLocale: string) => {
  locale.value = newLocale
  storage.setData('lang', newLocale)
}

const radio = ref<string>()
</script>

<style scoped lang="scss">
.select-lang {
  background-color: #0054a8;
}

label {
  @apply cursor-pointer p-2 rounded-md bg-[#3b82f6] transition-all ease-in duration-100;
  &:not(.select-lang):hover {
    @apply bg-[#60a5fa];
  }
}
</style>

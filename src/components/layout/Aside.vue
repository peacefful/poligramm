<template>
  <aside>
    <div class="aside">
      <Profile />
      <div class="mb-2">
        <ToogleLanguage />
        <Button class="w-full mt-4" color="danger" @click="logOut()" :title="t('logout')" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ToogleLanguage from '@/components/ToogleLanguage.vue'
import Profile from '@/components/Profile.vue'
import Button from '@/components/ui/Button.vue'
import router from '@/router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const logOut = () => {
  localStorage.clear()
  return router.push('/')
}
</script>

<style scoped>
.aside {
  @apply p-2 fixed w-[364px] bg-blue-900 min-h-screen flex flex-col justify-between;
}
</style>

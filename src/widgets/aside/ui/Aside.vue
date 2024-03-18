<template>
  <aside class="aside">
    <div class="aside__wrapper">
      <Profile />
      <div class="mb-2">
        <ToogleLanguage />
        <Button 
          class="w-full mt-4"
          color="danger"
          @click="logOut"
          :title="t('logout')"
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ToogleLanguage from '@/components/ToogleLanguage.vue'
import Profile from '@/components/Profile.vue'
import router from '@/router'
import { Button } from '@/shared/ui/Button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const logOut = () => {
  localStorage.clear()
  return router.push('/')
}
</script>

<style>
@import url("./style.module.scss");
</style>

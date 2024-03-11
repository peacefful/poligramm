<template>
  <div class="py-4 text-center" v-if="usersStore.user">
    <div class="user-data">{{ t('data') }}</div>
    <div class="user-data">{{ t('login') }}: {{ usersStore.user.login }}</div>
    <div class="user-data">{{ t('name') }}: {{ usersStore.user.name }}</div>
    <div class="user-data">{{ t('surname') }}: {{ usersStore.user.surname }}</div>
    <div class="user-data">{{ t('appointment') }}: {{ usersStore.user.appointment }}</div>
    <div class="user-data">{{ t('rank') }}: {{ usersStore.user.rank }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUsersStore } from '@/stores/UsersStore'

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()
usersStore.getUserData()
</script>

<style scoped lang="scss">
.user-data {
  @apply bg-[#0054A8] p-2 mt-4 rounded-md transition ease-in-out duration-100 hover:bg-[#3c87d3];
}
</style>

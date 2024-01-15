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
import { useI18n } from "vue-i18n"
import { useUsersStore } from "@/stores/UsersStore";

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()
usersStore.getUserData()
</script>

<style scoped lang="scss">
.user-data {
	background-color: #0054A8;
	padding: 0.5rem;
	margin-top: 1rem;
	border-radius: 0.375rem;
	transition: background-color ease-in-out 0.1s;

	&:hover {
		background-color: #1a73cb;
	}
}
</style>
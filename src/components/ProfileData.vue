<template>
	<div class="py-4 text-center">
		<div class="user-data">{{ $t('data') }}</div>
		<div class="user-data">
			{{ t('login') }}: {{ userStore.user.login }}
		</div>
		<div class="user-data">
			{{ t('name') }}: {{ userStore.user.name }}
		</div>
		<div class="user-data">
			{{ t('surname') }}: {{ userStore.user.surname }}
		</div>
		<div class="user-data">
			{{ t('appointment') }}: {{ userStore.user.appointment }}
		</div>
		<div class="user-data">
			{{ t('rank') }}: {{ userStore.user.rank }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useUsersStore } from "@/stores/UsersStore";
import { onMounted } from "vue"
const { t } = useI18n({ useScope: 'global' })

const userStore = useUsersStore()

onMounted(async () => await userStore.getUserData())
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
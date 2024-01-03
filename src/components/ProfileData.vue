<template>
	<div class="py-4 text-center">
		<div class="user-data">{{ $t('data') }}</div>
		<div class="user-data">
			{{ t('login') }}: {{ data.user.login }}
		</div>
		<div class="user-data">
			{{ t('name') }}: {{ data.user.name }}
		</div>
		<div class="user-data">
			{{ t('surname') }}: {{ data.user.surname }}
		</div>
		<div class="user-data">
			{{ t('appointment') }}: {{ data.user.appointment }}
		</div>
		<div class="user-data">
			{{ t('rank') }}: {{ data.user.rank }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useUsersStore } from "@/stores/UsersStore";

const { t } = useI18n({ useScope: 'global' })

const data = useUsersStore()
data.getUserData()
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
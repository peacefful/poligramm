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
		<CustomButton class="w-full mt-4" @click="logOut()" title="Выйти" />
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useUsersStore } from "@/stores/UsersStore";
import { useRouter } from "vue-router";
import CustomButton from "./ui/UICustomButton.vue";

const router = useRouter()

const { t } = useI18n({ useScope: 'global' })

const data = useUsersStore()
data.getUserData()

const logOut = () => {
	localStorage.clear()
	return router.push("/")
}
</script>

<style scoped>
.user-data {
	background-color: #0054A8;
	padding: 0.5rem;
	margin-top: 1rem;
	border-radius: 0.375rem;
}
</style>
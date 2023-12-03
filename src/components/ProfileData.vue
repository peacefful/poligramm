<template>
	<div>
		<div class="py-4 text-center">
			<div class="bg-[#0054A8] rounded-md p-2">{{ $t('data') }}</div>
			<div class="bg-[#0054A8] rounded-md p-2 mt-4">
				{{ t('login') }}: {{ data.user.login }}
			</div>
			<div class="bg-[#0054A8] rounded-md p-2 mt-4">
				{{ t('name') }}: {{ data.user.name }}
			</div>
			<div class="bg-[#0054A8] rounded-md p-2 mt-4">
				{{ t('surname') }}: {{ data.user.surname }}
			</div>
			<div class="bg-[#0054A8] rounded-md p-2 mt-4">
				{{ t('appointment') }}: {{ data.user.appointment }}
			</div>
			<div class="bg-[#0054A8] rounded-md p-2 mt-4">
				{{ t('rank') }}: {{ data.user.rank }}
			</div>
			<button @click="logOut()"
				class="bg-[#299fff] rounded-md p-2 mt-4 w-full hover:bg-[#167ed3] ease-out duration-150">
				Выйти
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useUserStore } from "@/stores/UserStore";
import { useRouter } from "vue-router";

const router = useRouter()

const { t } = useI18n({ useScope: 'global' })

const data = useUserStore()
data.getUserData()

const logOut = () => {
	localStorage.clear()
	return router.push("/")
}
</script>
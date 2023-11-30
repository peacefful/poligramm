<template>
	<div>
		<div class="py-4 text-center">
			<div v-if="user">
				<div class="bg-[#0054A8] rounded-md p-2">{{ $t('data') }}</div>
				<div class="bg-[#0054A8] rounded-md p-2 mt-4">
					{{ t('login') }}: {{ user?.login }}
				</div>
				<div class="bg-[#0054A8] rounded-md p-2 mt-4">
					{{ t('name') }}: {{ user?.name }}
				</div>
				<div class="bg-[#0054A8] rounded-md p-2 mt-4">
					{{ t('surname') }}: {{ user?.surname }}
				</div>
				<div class="bg-[#0054A8] rounded-md p-2 mt-4">
					{{ t('appointment') }}: {{ user?.appointment }}
				</div>
				<div class="bg-[#0054A8] rounded-md p-2 mt-4">
					{{ t('rank') }}: {{ user?.rank }}
				</div>
			</div>
			<div v-else class="bg-[#0054A8] rounded-md p-2 mt-4">Профиля нету</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios"
import { ref } from 'vue';
import type { iUser } from "@/interfaces/iUsers"
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

const BASE_URL:string = 'http://localhost:3000/api/users'
const user = ref<iUser>()

const id:string|null = localStorage.getItem("id")

const getUser = async () => {
	user.value = (await axios.get(`${BASE_URL}/${id}`)).data
}

getUser()
</script>
<template>
	<main class="mt-5 p-1">
		<h1 class="text-3xl text-center">{{ t('authorization') }}</h1>
		<form class="flex flex-col max-w-sm min-h-full" @submit.prevent="authorization()">
			<UIInput bg="#0054A8" class="px-1" v-model:value="login" :placeholder="t('login')"/>
			<UIInput bg="#0054A8" class="px-1" v-model:value="password" :placeholder="t('password')"/>
			<div class="flex">
				<CustomButton class="w-full my-2" :title="t('forgotMyPassword')" />
				<CustomButton class="w-full my-2 ml-4" :title="t('login')" />
			</div>
		</form>
		<div @click="updateLocale()" class="text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer">{{ t('updateLanguage') }}</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios"
import { useRouter } from 'vue-router';
import { useToogleLanguage } from "@/hooks/useToogleLang"
import CustomButton from '@/components/ui/UICustomButton.vue';
import UIInput from '@/components/ui/UIInput.vue';

const { t, updateLocale } = useToogleLanguage()

const router = useRouter()

const login = ref<string>("")
const password = ref<string>("")

const AUTH_USER:string = 'http://localhost:3000/api/auth'

const authorization = async () => {
	if (login.value && password.value) {
		const authUser = await axios.post(AUTH_USER, {
			login: login.value,
			password: password.value,
		})
		
		if (authUser) {
			localStorage.setItem('token', authUser.data.token)
			localStorage.setItem('id', authUser.data.id)
			localStorage.setItem('uuid', authUser.data.uuid)
			router.push("home")
		} else {
			new Error("Ошибка")
		}
	}
}
</script>

<style scoped>
@import './styles.module.scss';
</style>
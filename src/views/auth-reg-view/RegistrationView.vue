<template>
	<main class="mt-5 p-1">
		<h1 class="text-3xl text-center">{{ t("signUp") }}</h1>
		<form class="flex flex-col max-w-sm" @submit.prevent="registration()">
			<UIInput v-model:value="surname" class="px-1" bg="#0054A8" :placeholder="t('surname')"/>
			<UIInput v-model:value="name" class="px-1" bg="#0054A8" :placeholder="t('name')"/>
			<select class="mt-5" v-model="rank">
					<option disabled value="">{{ t('rank') }}</option>
					<option value="Полицейский офицер">Полицейский офицер</option>
					<option value="Детектив">Детектив</option>
					<option value="Инспектор">Инспектор</option>
					<option value="Комиссар">Комиссар</option>
			</select>
			<select v-model="appointment">
				<option disabled value="">{{ t('appointment') }}</option>
				<option value="Рядовой полицейский">Рядовой полицейский</option>
				<option value="Сержант">Сержант</option>
				<option value="Лейтенант">Лейтенант</option>
				<option value="Капитан">Капитан</option>
			</select>
			<UIInput v-model:value="login" class="px-1" bg="#0054A8" :placeholder="t('login')"/>
			<UIInput v-model:value="password" class="px-1" bg="#0054A8" :placeholder="t('password')"/>
			<UIInput v-model:value="phone" class="px-1" bg="#0054A8" :placeholder="t('phone')"/>
			<div class="flex items-center content-between">
				<div class="rounded-2xl bg-polligramBackground p-5 mt-1 bg-[#0054A8]">
					<input type="file" id="fileInput" class="hidden">
					<label for="fileInput">
						<img style="cursor: pointer" src="../../assets/icons/image.svg" alt="">
					</label>
				</div>
				<div class="w-full ml-3">
					<select v-model="role">
						<option disabled value="">{{ t("access") }}</option>
						<option value="Главный админ">Главный админ</option>
						<option value="Админ">Админ</option>
						<option value="Редактор">Редактор</option>
						<option value="Участник">Участник</option>
					</select>
					<CustomButton class="w-full text-[18px] my-2" :title='t("signUp")' />
				</div>
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

const surname = ref<string>('')
const name = ref<string>('')
const appointment = ref<string>('')
const rank = ref<string>('')
const login = ref<string>('')
const password = ref<string>('')
const role = ref<string>('')
const phone = ref<string>('')

const BASE_URL:string = 'http://localhost:3000/api/users'

const registration = async () => {
	if (
		surname.value.trim() && 
		name.value.trim() && 
		appointment.value.trim() && 
		rank.value.trim() && 
		login.value.trim() && 
		password.value.trim() && 
		role.value.trim() && 
		phone.value.trim()
	) {
		const user = await axios.post(BASE_URL, {
			surname: surname.value,
			name: name.value,
			appointment: appointment.value,
			rank: rank.value,
			login: login.value,
			password: password.value,
			role: role.value,
			phone: phone.value,
		})

		user ? router.push("/") : new Error("Ощибка, регистрация не завершена")
	}
}
</script>

<style scoped>
@import './styles.module.scss';
</style>
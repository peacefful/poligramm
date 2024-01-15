<template>
	<main class="h-screen flex flex-col justify-center items-center">
		<form class="flex flex-col max-w-sm" @submit.prevent="registration(dataRegistration)">
			<h1 class="text-3xl text-center">{{ t("signUp") }}</h1>
			<Input v-model:value="dataRegistration.surname" class="px-1" bg="#0054A8" :placeholder="t('surname')"/>
			<Input v-model:value="dataRegistration.name" class="px-1" bg="#0054A8" :placeholder="t('name')"/>
			<select class="mt-5" v-model="dataRegistration.rank">
					<option disabled value="">{{ t('rank') }}</option>
					<option value="Полицейский офицер">Полицейский офицер</option>
					<option value="Детектив">Детектив</option>
					<option value="Инспектор">Инспектор</option>
					<option value="Комиссар">Комиссар</option>
			</select>
			<select v-model="dataRegistration.appointment">
				<option disabled value="">{{ t('appointment') }}</option>
				<option value="Рядовой полицейский">Рядовой полицейский</option>
				<option value="Сержант">Сержант</option>
				<option value="Лейтенант">Лейтенант</option>
				<option value="Капитан">Капитан</option>
			</select>
			<Input v-model:value="dataRegistration.login" class="px-1" bg="#0054A8" :placeholder="t('login')"/>
			<Input v-model:value="dataRegistration.password" class="px-1" bg="#0054A8" :placeholder="t('password')" type="password"/>
			<Input v-model:value="dataRegistration.phone" class="px-1" bg="#0054A8" :placeholder="t('phone')"/>
			<div class="flex items-center content-between">
				<div class="rounded-2xl p-5 mt-1 bg-[#0054A8]">
					<input type="file" id="fileInput" class="hidden">
					<label for="fileInput">
						<img style="cursor: pointer" src="../../assets/icons/photo.svg" alt="">
					</label>
				</div>
				<div class="w-full ml-3">
					<select v-model="dataRegistration.role">
						<option disabled value="">{{ t("access") }}</option>
						<option value="Главный админ">Главный админ</option>
						<option value="Админ">Админ</option>
						<option value="Редактор">Редактор</option>
						<option value="Участник">Участник</option>
					</select>
					<Button class="w-full text-[18px] my-2" :title='t("signUp")' />
				</div>
			</div>
			<div @click="updateLocale()" class="text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer">{{ t('updateLanguage') }}</div>
		</form>
	</main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { IUser } from '@/interfaces/iUsers';
import { toogleLanguage } from "@/utils/toogleLang"
import Button from '@/components/ui/Button.vue';
import Input from '@/components/ui/Input.vue';
import { registration } from '@/api/users';
import type { IChats } from '@/interfaces/iChats';

const { t, updateLocale } = toogleLanguage()

const dataRegistration:IUser = reactive({
	surname: "",
	name: "",
	appointment: "",
	rank: "",
	login: "",
	password: "",
	role: "",
	phone: "",
	chats: [] as IChats[]
})
</script>

<style scoped>
@import './styles.module.scss';
</style>
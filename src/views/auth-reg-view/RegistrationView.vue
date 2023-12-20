<template>
	<main class="mt-5 p-1">
		<h1 class="text-3xl text-center">{{ t("signUp") }}</h1>
		<form class="flex flex-col max-w-sm" @submit.prevent="registration(dataRegistration)">
			<UIInput v-model:value="dataRegistration.surname" class="px-1" bg="#0054A8" :placeholder="t('surname')"/>
			<UIInput v-model:value="dataRegistration.name" class="px-1" bg="#0054A8" :placeholder="t('name')"/>
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
			<UIInput v-model:value="dataRegistration.login" class="px-1" bg="#0054A8" :placeholder="t('login')"/>
			<UIInput v-model:value="dataRegistration.password" class="px-1" bg="#0054A8" :placeholder="t('password')"/>
			<UIInput v-model:value="dataRegistration.phone" class="px-1" bg="#0054A8" :placeholder="t('phone')"/>
			<div class="flex items-center content-between">
				<div class="rounded-2xl bg-polligramBackground p-5 mt-1 bg-[#0054A8]">
					<input type="file" id="fileInput" class="hidden">
					<label for="fileInput">
						<img style="cursor: pointer" src="../../assets/icons/image.svg" alt="">
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
					<CustomButton class="w-full text-[18px] my-2" :title='t("signUp")' />
				</div>
			</div>
		</form>
		<div @click="updateLocale()" class="text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer">{{ t('updateLanguage') }}</div>
	</main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { IUser } from '@/interfaces/iUsers';
import { useToogleLanguage } from "@/hooks/useToogleLang"
import CustomButton from '@/components/ui/UICustomButton.vue';
import UIInput from '@/components/ui/UIInput.vue';
import { registration } from '@/api/usersApi';
import type { IChats } from '@/interfaces/iChats';

const { t, updateLocale } = useToogleLanguage()

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
<template>
	<main class="mt-5 p-1">
		<h1 class="text-3xl text-center">{{ t('authorization') }}</h1>
		<form class="flex flex-col max-w-sm min-h-full" @submit.prevent="authorization(login, password)">
			<UIInput bg="#0054A8" class="px-1" v-model:value="login" :placeholder="t('login')" />
			<UIInput bg="#0054A8" class="px-1" v-model:value="password" :placeholder="t('password')" />
			<div class="flex">
				<CustomButton class="w-full my-2" :title="t('forgotMyPassword')" />
				<CustomButton class="w-full my-2 ml-4" :title="t('signIn')" />
			</div>
		</form>
		<div @click="updateLocale()"
			class="text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer">{{
				t('updateLanguage') }}</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToogleLanguage } from "@/hooks/useToogleLang"
import CustomButton from '@/components/ui/UICustomButton.vue';
import UIInput from '@/components/ui/UIInput.vue';
import { authorization } from "@/api/usersApi"

const { t, updateLocale } = useToogleLanguage()

const login = ref<string>("")
const password = ref<string>("")
</script>

<style scoped>
@import './styles.module.scss';
</style>
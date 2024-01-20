<template>
	<main class="h-screen flex flex-col justify-center items-center p-1">
		<form class="max-w-sm" @submit.prevent="authorization(login, password)">
			<h1 class="text-3xl text-center">{{ t('authorization') }}</h1>
			<Input bg="#0054A8" class="p-1" v-model:value="login" :placeholder="t('login')" />
			<Input bg="#0054A8" class="p-1" v-model:value="password" :placeholder="t('password')" type="password" />
			<div class="flex mt-3">
				<Button class="w-full" :title="t('forgotMyPassword')" />
				<Button class="w-full ml-4" :title="t('signIn')" />
			</div>
		<div @click="updateLocale"
			class="text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer">{{
				t('updateLanguage') }}</div>
		</form>
	</main>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Input from '@/components/ui/Input.vue';
import { ref } from 'vue';
import { toogleLanguage } from "@/utils/toogleLang"
import { authorization } from "@/api/users"

const { t, updateLocale } = toogleLanguage()

const login = ref<string>("")
const password = ref<string>("")
</script>

<style scoped>
@import './styles.module.scss';
</style>
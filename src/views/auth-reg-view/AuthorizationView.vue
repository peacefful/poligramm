<template>
	<main class="h-screen flex flex-col justify-center items-center">
		<form class="max-w-sm" @submit.prevent="authorization(login, password)">
			<h1 class="text-3xl text-center">{{ t('authorization') }}</h1>
			<UIInput bg="#0054A8" class="px-1" v-model:value="login" :placeholder="t('login')" />
			<UIInput bg="#0054A8" class="px-1" v-model:value="password" :placeholder="t('password')" />
			<div class="flex mt-3">
				<UIButton class="w-full" :title="t('forgotMyPassword')" />
				<UIButton class="w-full ml-4" :title="t('signIn')" />
			</div>
		<div @click="updateLocale()"
			class="text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer">{{
				t('updateLanguage') }}</div>
		</form>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToogleLanguage } from "@/hooks/useToogleLang"
import UIButton from '@/components/ui/UIButton.vue';
import UIInput from '@/components/ui/UIInput.vue';
import { authorization } from "@/api/users"

const { t, updateLocale } = useToogleLanguage()

const login = ref<string>("")
const password = ref<string>("")
</script>

<style scoped>
@import './styles.module.scss';
</style>
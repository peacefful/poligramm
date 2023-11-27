<template>
	<div class="flex justify-between items-center">
		<h2>{{ t('language') }}</h2>
		<div class="flex">
			<input 
				v-model="radio" 
				type="radio" 
				class="hidden" 
				value="RU" 
				id="ru" 
				name="radioGroup">
			<label 
				@click="updateLocale('ru')" 
				:class="[locale === 'ru' ? 'select-lang' : '']" 
				for="ru" 
				class="cursor-pointer mr-3 p-2 rounded-md bg-blue-500 text-white">
				RU
			</label>
			<input 
				v-model="radio" 
				type="radio" 
				value="KZ" 
				class="hidden" 
				id="kz" 
				name="radioGroup">
			<label 
				@click="updateLocale('kz')" 
				:class="[locale === 'kz' ? 'select-lang' : '']" 
				for="kz" 
				class="cursor-pointer p-2 rounded-md bg-blue-500 text-white">
				KZ
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n({ useScope: 'global' })

const updateLocale = (newLocale:string) => {
	locale.value = newLocale;
	localStorage.setItem("lang", newLocale);
};

const radio = ref<string>()

</script>

<style scoped>
.select-lang{
	background-color: #0054A8;
}
</style>
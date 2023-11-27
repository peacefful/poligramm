<template>
	<main>
		<aside class="bg-blue-900 min-h-screen">
			<div class="p-2 fixed w-[364px] bg-blue-900 min-h-screen">
				<ProfileData />
				<SelectGeolocation class="mt-2" />
				<div class="flex justify-between mt-4">
					<label>{{ t('messenger') }}</label>
					<input class="w-6 h-6" type="checkbox" v-model="toogleMessenger">
				</div>
				<ToogleThemes class="mt-[32px]" />
				<ToogleLanguage class="mt-[100px]" />
			</div>
		</aside>
		<article class="w-[90%] flex flex-col justify-between">
			<section v-if="toogleMessenger" class="bg-[#007ED2] flex flex-col justify-between h-full text-[17px]">
				<Messenger />
			</section>
		</article>
	</main>
</template>

<script setup lang="ts">
import ToogleLanguage from "@/components/ToogleLanguage.vue"
import ToogleThemes from "@/components/ToogleThemes.vue"
import SelectGeolocation from "@/components/SelectGeolocation.vue"
import ProfileData from "@/components/ProfileData.vue"
import Messenger from "@/components/Messenger.vue"
import { ref } from 'vue';
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

const toogleMessenger = ref<boolean>(false)
</script>

<style scoped>
@import "./styles.module.scss";
</style>
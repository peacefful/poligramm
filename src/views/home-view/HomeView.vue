<template>
	<main v-if="accessToken">
		<aside class="bg-blue-900 min-h-screen">
			<div class="p-2 fixed w-[364px] bg-blue-900 min-h-screen">
				<ProfileData />
				<div class="flex justify-between mt-4">
					<label>{{ t('chats') }}</label>
					<input class="w-6 h-6" type="checkbox" v-model="toogleMessenger">
				</div>
				<div class="flex justify-between mt-4">
					<label>{{ t('invites') }}</label>
					<input class="w-6 h-6" type="checkbox" v-model="toogleInvitesInChats">
				</div>
				<ToogleThemes class="mt-[32px]" />
				<ToogleLanguage class="mt-[100px]" />
			</div>
		</aside>
		<article class="w-full flex flex-col justify-between">
			<section v-if="toogleMessenger">
				<Chats />
			</section>
			<section v-if="toogleInvitesInChats">
				<InvitesInChats />
			</section>
		</article>
	</main>
	<div v-else class="text-5xl flex justify-center items-center">
		<router-link to="/">Войдите</router-link>
	</div>
</template>

<script setup lang="ts">
import ToogleLanguage from "@/components/ToogleLanguage.vue"
import ToogleThemes from "@/components/ToogleThemes.vue"
import ProfileData from "@/components/ProfileData.vue"
import Chats from "@/components/ChatsList.vue"
import InvitesInChats from "@/components/InvitesInChats.vue"
import { ref } from 'vue';
import { useI18n } from "vue-i18n"
import socket from "@/utils/socket"

const accessToken = localStorage.getItem("token")
const { t } = useI18n({ useScope: 'global' })

const toogleMessenger = ref<boolean>(false)
const toogleInvitesInChats = ref<boolean>(false)

socket.emit('personalInvite', localStorage.getItem("uuid"));

socket.on('messageInvite', (room) => {
	console.log(`Приглашение в чат "${room}"`);
})
</script>

<style scoped>
@import "./styles.module.scss";
</style>
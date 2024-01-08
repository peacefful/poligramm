<template>
	<div class="layout-aside" v-if="accessToken">
		<aside class="bg-blue-900 min-h-screen ">
			<div class="p-2 fixed w-[364px] bg-blue-900 min-h-screen flex flex-col justify-between">
				<div>
					<ProfileData />
					<!-- <ToogleThemes class="mt-[32px]" /> -->
				</div>
				<div class="mb-2">
					<ToogleLanguage/>
					<UIButton class="w-full mt-4" color="danger" @click="logOut()" title="Выйти" />
				</div>
			</div>
		</aside>
		<article v-if="showChats" class="w-full flex flex-col justify-between">
			<section>
				<RouterView />
			</section>
		</article>
		<article v-else class="w-full flex flex-col justify-between">
			<ChatContainer @close-chat="closeChat()" :uuid="uuid" :name="room" />
		</article>
		<transition>
			<div v-if="isInviteRoom && showChats" class="fixed bottom-0 right-0 w-[380px] bg-blue-600 p-4 rounded-xl">
				<p class="mb-2">{{ t('inviteToChat') }}</p>
				<UIButton :title="t('signIn')"
					@click.prevent="enterChat(inviteRoom.nameRoom, inviteRoom.uuidRoom, closeNotification)" />
				<UIButton @click.prevent="closeNotification" class="ml-3" color="danger" :title="t('close')" />
			</div>
		</transition>
	</div>
	<div v-else class="h-screen flex flex-col justify-center items-center">
		<router-link to="/">
			<UIButton class="text-4xl" title="Войдите" />
		</router-link>
	</div>
</template>

<script setup lang="ts">
import ToogleLanguage from "@/components/ToogleLanguage.vue"
import ToogleThemes from "@/components/ToogleThemes.vue"
import ProfileData from "@/components/ProfileData.vue"
import ChatContainer from "@/components/ChatContainer.vue"
import UIButton from "@/components/ui/UIButton.vue"
import socket from "@/utils/socket"
import { useEnterChat } from "@/hooks/useEnter";
import { storage } from "@/utils/storage"
import router from "@/router"
import { ref, reactive } from 'vue';
import { useI18n } from "vue-i18n"

interface IInviteRoom {
	nameRoom: string
	uuidRoom: string
}

const accessToken = storage.getData("token")
const { t } = useI18n({ useScope: 'global' })

const inviteRoom: IInviteRoom = reactive({
	nameRoom: "",
	uuidRoom: ""
})

socket.emit('personalInvite', storage.getData("uuid"));
const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()

let isInviteRoom = ref<boolean>(false)
const closeNotification = () => isInviteRoom.value = false

socket.on('messageInvite', (nameRoom, uuidRoom) => {
	inviteRoom.nameRoom = nameRoom
	inviteRoom.uuidRoom = uuidRoom

	if (inviteRoom.nameRoom && inviteRoom.uuidRoom) {
		isInviteRoom.value = true
		setTimeout(() => isInviteRoom.value = false, 5000);
	}
})

const logOut = () => {
	localStorage.clear()
	return router.push("/")
}
</script>

<style scoped>
@import "./styles.module.scss";
</style>
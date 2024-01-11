<template>
	<div class="layout-aside" v-if="accessToken">
		<aside class="bg-blue-900 min-h-screen ">
			<div class="p-2 fixed w-[364px] bg-blue-900 min-h-screen flex flex-col justify-between">
				<ProfileData />
				<div class="mb-2">
					<ToogleLanguage />
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
		<PushNotification 
			@enter-chat="enterChat(inviteRoom.nameRoom, inviteRoom.uuidRoom, closeNotification)"
			:show-chats="showChats"
			:is-invite-room="isInviteRoom"
			@close-notification="closeNotification" />
	</div>
	<div v-else class="h-screen flex flex-col justify-center items-center">
		<router-link to="/">
			<UIButton class="text-4xl" title="Войдите" />
		</router-link>
	</div>
</template>

<script setup lang="ts">
import ToogleLanguage from "@/components/ToogleLanguage.vue"
import ProfileData from "@/components/ProfileData.vue"
import ChatContainer from "@/components/ChatContainer.vue"
import PushNotification from "@/components/PushNotification.vue"
import UIButton from "@/components/ui/UIButton.vue"
import socket from "@/utils/socket"
import router from "@/router"
import { useEnterChat } from "@/hooks/useEnter";
import { storage } from "@/utils/storage"
import { ref, reactive } from 'vue';

interface IInviteRoom { uuidRoom: string, nameRoom: string }
const inviteRoom: IInviteRoom = reactive({
	nameRoom: "",
	uuidRoom: ""
})

const accessToken = storage.getData("token")

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
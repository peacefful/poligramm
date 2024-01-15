<template>
	<div class="layout-main" v-if="accessToken">
		<Aside class="layout-main_aside" />
		<article v-if="showChats" class="w-full flex flex-col justify-between">
			<section>
				<RouterView />
			</section>
		</article>
		<article v-else class="w-full flex flex-col justify-between">
			<Chat @close-chat="closeChat()" :uuid="uuid" :name="room" />
		</article>
		<Notification 
			@enter-chat="enterChat(invite.titleRoom, invite.uuidRoom, closeNotification)"
			:show-chats="showChats" 
			:is-invite-room="isInviteRoom" 
			@close-notification="closeNotification" />
	</div>
	<div v-else class="h-screen flex flex-col justify-center items-center">
		<router-link to="/">
			<Button class="text-4xl" title="Войдите" />
		</router-link>
	</div>
</template>

<script setup lang="ts">
import Aside from "./Aside.vue"
import Chat from "@/components/Chat.vue"
import Notification from "@/components/Notification.vue"
import Button from "@/components/ui/Button.vue"
import socket from "@/utils/socket"
import { useEnterChat } from "@/hooks/useEnter";
import { storage } from "@/utils/storage"
import { ref, reactive } from 'vue';

const accessToken = storage.getData("token")

interface IInvite { uuidRoom: string, titleRoom: string, userUuid: boolean }
const invite: IInvite = reactive({ 
	uuidRoom: "", 
	titleRoom: "", 
	userUuid: false
})

socket.emit('personalInvite', storage.getData("uuid"));

let isInviteRoom = ref<boolean>(false)
const closeNotification = () => isInviteRoom.value = false

socket.on('messageInvite', (title, uuid, userUuid) => {
	invite.titleRoom = title
	invite.uuidRoom = uuid
	invite.userUuid = userUuid === storage.getData('uuid')

	if (invite.titleRoom && invite.uuidRoom && invite.userUuid) {
		isInviteRoom.value = true
		setTimeout(() => isInviteRoom.value = false, 5000);
	}
})

const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()
</script>

<style scoped lang="scss">
.layout-main {
	display: flex;
}

img {
	cursor: pointer;
}

article {
	margin-left: 364px;
	font-size: 22px;
}

@media (max-width: 1400px) {
	.layout-main_aside {
		display: none;
	}

	article {
		height: 100vh;
		margin-left: 0;

		section {
			font-size: 15px;
		}

		form {
			font-size: 15px;
			padding: 4% 0%;
		}
	}
}
</style>
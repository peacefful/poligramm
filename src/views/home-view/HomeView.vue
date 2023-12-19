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
		<article v-if="showChats" class="w-full flex flex-col justify-between">
			<section v-if="toogleMessenger">
				<Chats />
			</section>
			<section v-if="toogleInvitesInChats">
				<InvitesInChats />
			</section>
		</article>
		<article v-else class="w-full flex flex-col justify-between">
			<ChatContainer @close-chat="closeChat" :uuid="uuid" :name="room" />
		</article>
		<transition>
			<div v-if="isInviteRoom" class="fixed bottom-0 right-0 w-[380px] bg-blue-600 p-4 rounded-xl">
				<p class="mb-2">Вас пригласили в чат</p>
				<CustomButton title="Войти" @click.prevent="enterChat(inviteRoom.nameRoom, inviteRoom.uuidRoom)" />
				<CustomButton @click.prevent="closeModal()" class="bg-red-600 hover:bg-red-700 ml-3" title="Закрыть" />
			</div>
		</transition>
	</main>
	<div v-else class="text-5xl flex flex-col justify-center items-center">
		<router-link to="/" class="mt-14">Войдите</router-link>
	</div>
</template>

<script setup lang="ts">
import ToogleLanguage from "@/components/ToogleLanguage.vue"
import ToogleThemes from "@/components/ToogleThemes.vue"
import ProfileData from "@/components/ProfileData.vue"
import Chats from "@/components/ChatsList.vue"
import InvitesInChats from "@/components/InvitesInChats.vue"
import CustomButton from "@/components/ui/UICustomButton.vue"
import { ref, reactive } from 'vue';
import { useI18n } from "vue-i18n"
import socket from "@/utils/socket"
import ChatContainer from "@/components/ChatContainer.vue"
import { useEnterChat } from "@/hooks/useEnterChat";
import { storage } from "@/utils/storage"

interface IInviteRoom {
	nameRoom: string
	uuidRoom: string
}

const accessToken = storage.getData("token")
const { t } = useI18n({ useScope: 'global' })

const toogleMessenger = ref<boolean>(false)
const toogleInvitesInChats = ref<boolean>(false)

const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()

const inviteRoom: IInviteRoom = reactive({
	nameRoom: "",
	uuidRoom: ""
})

let isInviteRoom = ref<boolean>(false)
const closeModal = () => isInviteRoom.value = false

socket.emit('personalInvite', storage.getData("uuid"));

socket.on('messageInvite', (nameRoom, uuidRoom) => {
	inviteRoom.nameRoom = nameRoom
	inviteRoom.uuidRoom = uuidRoom

	if (inviteRoom.nameRoom && inviteRoom.uuidRoom) {
		isInviteRoom.value = true
		setTimeout(() => isInviteRoom.value = false, 5000);
	}
})
</script>

<style scoped>
@import "./styles.module.scss";

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
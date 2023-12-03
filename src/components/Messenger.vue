<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<h1 class="text-center text-3xl mt-5">Ваши чаты</h1>
	<div class="m-2">
		<div class="flex items-center mt-3">
			<button @click="showCreateChatForm = !showCreateChatForm"
				class="bg-[#299fff] rounded-md p-2 hover:bg-[#167ed3] ease-out duration-150">Создать новый чат</button>
			<FormChat v-if="showCreateChatForm" />
		</div>
		<ul class="mt-5" v-for="chat in data.user.chats" :key="chat.id">
			<li
				class="bg-blue-500 p-5 rounded-md flex justify-between items-center cursor-pointer hover:bg-blue-400 ease-in duration-100 mt-2">
				{{ chat.roomName }}
				<div class="flex w-20 justify-between">
					<img title="Перейти в чат" src="../assets/icons/chat.svg" alt="">
					<img title="Удалить чат" @click="deleteChat(chat.id)" src="../assets/icons/trash.svg" alt="">
				</div>
			</li>
		</ul>
	</div>
	<!-- <div class=" flex flex-col justify-between h-full text-xl">
		<div class="p-2">
			<div class="p-3 flex flex-col items-end justify-end rounded-2xl bg-blue-500 mt-3" v-for="user in messages"
				:key="user.id">
				<div class="mr-10">{{ user.message }}</div>
				<span class="text-[13px] inline-block mt-[-1%] text-gray-300">{{ user.sendTime }}</span>
			</div>
		</div>
		<div class="w-full bg-blue-900 p-3 sticky bottom-0 mt-20">
			<form class="flex justify-center" autocomplete="off" @submit.prevent="sendMessage()">
				<textarea @keydown.enter.prevent="sendMessage()" :placeholder="t('messengerInputPlaceholder')"
					class="rounded-md p-2 w-full bg-[#09F] resize-none focus:outline-none" v-model="message"></textarea>
				<InputButton ui-src="@/../public/paperClip.svg" input-type="file" />
				<InputButton ui-src="@/../public/sendMessage.svg" input-type="submit" />
			</form>
		</div>
	</div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/UserStore";
import FormChat from "@/components/ui/FormChat.vue"
import { deleteChat } from "../api/chatApi"

const showCreateChatForm = ref<boolean>(false)

const data = useUserStore()
data.getUserData()

import InputButton from "@/components/ui/InputButton.vue"
import dayjs from "dayjs"
import { useI18n } from "vue-i18n"
import socket from "../utils/socket"
import type { IMessage } from "../interfaces/iMessage"

const { t } = useI18n({ useScope: 'global' })

const message = ref<string>("")
const messages = ref<IMessage[]>([])

function sendMessage() {
	if (message.value) {
		socket.emit('message', message.value)
		message.value = ''
	}
}

socket.on('message', (message, id) => {
	messages.value.push({ message, id, sendTime: dayjs().format('HH:mm') })
	window.scrollTo(1, document.body.scrollHeight);
})
</script>
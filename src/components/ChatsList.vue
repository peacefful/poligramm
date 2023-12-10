<template>
	<div v-if="showChats === true">
		<h1 class="text-center text-3xl mt-5">Ваши чаты</h1>
		<div class="m-2">
			<div class="flex items-center mt-3">
				<CustomButton @click="showCreateChatForm = !showCreateChatForm" title="Создать новый чат" />
				<FormChat v-if="showCreateChatForm" />
			</div>
			<ul class="mt-5" v-for="chat in data.user.chats" :key="chat.id">
				<li class="bg-blue-500 p-5 rounded-md flex justify-between items-center cursor-pointer hover:bg-blue-400 ease-in duration-100 mt-2"
					@click="getChat(chat.uuid, chat.roomName)">
					{{ chat.roomName }}
					<div class="flex w-20 justify-between">
						<img title="Перейти в чат" src="../assets/icons/chat.svg" alt="">
						<img title="Удалить чат" @click="deleteChat(chat.id)" src="../assets/icons/trash.svg" alt="">
					</div>
				</li>
			</ul>
		</div>
	</div>
	<Messenger @close-chat="closeChat" :uuid="uuid" :room-name="room" v-else />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "@/stores/UsersStore";
import FormChat from "@/components/ui/FormChat.vue"
import Messenger from "./MessengerContainer.vue";
import CustomButton from "./ui/CustomButton.vue";
import { deleteChat } from "../api/chatApi"

const data = useUsersStore()
data.getUserData()

const showCreateChatForm = ref<boolean>(false)
const showChats = ref<boolean>(true)

const closeChat = () => showChats.value = true

let uuid:string = ''
let room:string = ''

const getChat = (uuidRoom: string, roomName: string) => {
	showChats.value = false
	uuid = uuidRoom
	room = roomName
}
</script>@/stores/UsersStore
<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<form class="ml-3" @submit.prevent="addChat()">
		<div class="flex">
			<input type="text" placeholder="Название чата" v-model="room">
			<button type="submit"
				class="bg-[#299fff] rounded-md p-2 ml-3 hover:bg-[#167ed3] ease-out duration-150">Создать</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const room = ref<string>('')
const CHAT_API: string = 'http://localhost:3000/api/chats'

const addChat = async () => {
	if (room.value.trim()) {
		await axios.post(CHAT_API, {
			roomName: room.value,
			uuid: uuidv4(),
			userId: Number(localStorage.getItem("id"))
		})
		room.value = ''
		location.reload()
	}
}
</script>
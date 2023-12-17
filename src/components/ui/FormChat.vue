<template>
	<form @submit.prevent="addChat()">
		<div class="flex justify-center sm:flex">
			<UIInput class="px-2" bg="#0054A8" v-model:value="room" placeholder="Название чата"/>
			<CustomButton type="submit" title="Создать" class="ml-3"/>
		</div>
	</form>
</template>

<script setup lang="ts">
import CustomButton from './UICustomButton.vue';
import axios from 'axios';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import UIInput from './UIInput.vue';
import { storage } from '@/utils/storage';

const room = ref<string>('')
const CHAT_API: string = 'http://localhost:3000/api/chats'

const addChat = async () => {
	if (room.value.trim()) {
		await axios.post(CHAT_API, {
			roomName: room.value,
			uuid: uuidv4(),
			userId: Number(storage.getData("id"))
		})
		room.value = ''
		location.reload()
	}
}
</script>
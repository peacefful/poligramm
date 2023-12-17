<template>
	<div class=" flex flex-col justify-between h-full text-xl">
		<div class="bg-blue-900 sticky top-0 p-2">
			<div class="flex items-center justify-between ">
				<CustomButton @click="$emit('closeChat')" title="Закрыть" />
				<h2>{{ name }}</h2>
				<CustomButton @click="openModal" title="Добавить пользователя" />
			</div>
		</div>
		<Modal @closeModal="closeModal" :is-open-modal="isOpenModal" :uuid-room="chat.uuid" :name-room="chat.name" />
		<div>
			<div class="p-2">
				<UIMessages
					v-for="user in messages" :key="user.id"
					:id="user.id"
					:message="user.message"
					:time="user.sendTime"/>
			</div>
			<div class="w-full bg-blue-900 p-3 sticky bottom-0 mt-20">
				<form class="flex justify-center" autocomplete="off" @submit.prevent="sendMessage()">
					<textarea @keydown.enter.prevent="sendMessage()" :placeholder="t('messengerInputPlaceholder')"
						class="rounded-md p-2 w-full bg-[#09F] resize-none focus:outline-none" v-model="message"></textarea>
					<InputButton :ui-src="paperClipIcon" input-type="file" />
					<InputButton :ui-src="sendMessageIcon" input-type="submit" />
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import InputButton from "./ui/InputButton.vue"
import dayjs from "dayjs"
import { useI18n } from "vue-i18n"
import socket from "../utils/socket"
import CustomButton from "./ui/UICustomButton.vue"
import type { IMessage } from "../interfaces/iMessage"
import { ref } from "vue"
import { useToogleModal } from "../hooks/useToggleModal"
import Modal from "./ui/ModalAddUsers.vue"
import paperClipIcon from "../assets/icons/paperClip.svg"
import sendMessageIcon from "../assets/icons/sendMessage.svg"
import { storage } from "@/utils/storage"
import UIMessages from "./ui/UIMessages.vue"

const chat = defineProps<{
	name: string
	uuid: string
}>()

defineEmits(['closeChat'])

const { openModal, closeModal, isOpenModal } = useToogleModal()

const { t } = useI18n({ useScope: 'global' })

const message = ref<string>("")
const messages = ref<IMessage[]>([])

socket.emit('join', chat.uuid)

const sendMessage = () => {
	if (message.value) {
		socket.emit('message', message.value, Number(storage.getData("id")), dayjs().format('HH:mm'), chat.uuid)
		message.value = ''
	}
}

socket.on('message', (message, id) => {
	messages.value.push({ message, id, sendTime: dayjs().format('HH:mm') })
	window.scrollTo(1, document.body.scrollHeight);
})
</script>
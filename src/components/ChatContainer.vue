<template>
	<div ref="body" class="flex flex-col justify-between min-h-full">
		<div class="bg-blue-900 sticky top-0 p-2">
			<div class="flex items-center justify-between">
				<div @click="$emit('closeChat')"
					class="rounded-full hover:bg-[#48adff] ease-in duration-100 active:bg-[#3090df] cursor-pointer">
					<img src="../assets/icons/arrow.svg" alt="">
				</div>
				<h2>{{ name }}</h2>
				<UIButtonMenu @click="toogleMenu()" />
				<div v-if="openMenu" class="text-lg absolute top-12 right-2 bg-blue-400 text-white p-2 rounded-sm">
					<p @click="openModal" class="cursor-pointer hover:bg-blue-300 p-2 rounded-md">{{ t('addUsers') }}</p>
				</div>
			</div>
		</div>
		<Modal :title="t('selectUser')" @closeModal="closeModal" :is-open-modal="isOpenModal" :uuid-room="chat.uuid"
			:name-room="chat.name"/>
		<div>
			<div class="p-2">
				<UIMessages v-for="user in messages" :key="user.id" :id="user.id" :message="user.message"
					:time="user.sendTime" />
			</div>
			<div class="w-full bg-blue-900 p-3 sticky bottom-[-1%]">
				<form class="flex justify-center" autocomplete="off" @submit.prevent="sendMessage()">
					<textarea @keydown.enter.prevent="sendMessage()" :placeholder="t('messengerInputPlaceholder')"
						class="rounded-md p-2 w-full bg-[#09F] resize-none focus:outline-none" v-model="message">
					</textarea>
					<UIInputImg :ui-src="paperClipIcon" input-type="file" />
					<UIInputImg :ui-src="sendMessageIcon" input-type="submit" />
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import UIInputImg from "./ui/UIInputImg.vue"
import dayjs from "dayjs"
import { useI18n } from "vue-i18n"
import socket from "@/utils/socket"
import UIButtonMenu from "./ui/UIButtonMenu.vue"
import type { IMessage } from "@/interfaces/iMessage"
import { ref } from "vue"
import { useToogleModal } from "@/hooks/useToogle"
import Modal from "./ui/UIModalAddUsers.vue"
import paperClipIcon from "@/assets/icons/paperClip.svg"
import sendMessageIcon from "@/assets/icons/sendMessage.svg"
import { storage } from "@/utils/storage"
import UIMessages from "./ui/UIMessages.vue"
import { useToogleMenu } from "@/hooks/useToogle"

const { t } = useI18n({ useScope: 'global' })

const chat = defineProps<{
	name: string
	uuid: string
}>()

defineEmits(['closeChat'])

const { body, openMenu, toogleMenu } = useToogleMenu()
const { openModal, closeModal, isOpenModal } = useToogleModal()

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
	messages.value.push({ message, id, sendTime: dayjs().format('HH:mm') });
	requestAnimationFrame(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
});
</script>@/hooks/useToogle@/hooks/useToogle
<template>
	<div class="flex flex-col justify-between min-h-full">
		<div class="bg-blue-900 sticky top-0 p-2">
			<div class="flex items-center justify-between">
				<div @click="$emit('closeChat')" class="rounded-full active:bg-[#3090df] ease-in duration-100 cursor-pointer">
					<img src="../assets/icons/arrow.svg" alt="">
				</div>
				<h2>{{ name }}</h2>
				<Dropdown :is-open-menu="isOpenMenu" @toogle-menu="toogleDropdown" :menu="chatMenu" />
			</div>
		</div>
		<Modal :title="t('selectUser')" @closeModal="closeModal" @submit-modal="sendInvitation(uuids, chat.uuid, chat.name)"
			:is-open-modal="isOpenModal" :title-success-button="t('add')" :error="error">
			<div class="mb-5">
				<Input class="p-3" v-model:value="findUser" />
				<div class="modal-form__users" v-for="user in filterUsers(usersStore.allUsers, findUser)" :key="user.id">
					<label class="flex justify-between items-center mt-5" :for="user.name">
						{{ user.name }} {{ user.surname }} ({{ user.rank }})
						<input v-model="uuids" :id="user.name" :value="user.uuid" class="h-5 w-5" type="checkbox">
					</label>
				</div>
			</div>
		</Modal>
		<div>
			<div class="p-2">
				<Messages v-for="user in messages" :key="user.id" :id="user.id" :message="user.message"
					:time="user.sendTime" />
			</div>
			<div class="w-full bg-blue-900 p-3 sticky bottom-[-1%]">
				<form class="flex justify-center" autocomplete="off" @submit.prevent="sendMessage()">
					<textarea @keydown.enter.prevent="sendMessage()" :placeholder="t('messengerInputPlaceholder')"
						class="overflow-y-hidden rounded-md p-2 w-full bg-[#09F] resize-none focus:outline-none"
						v-model="message">
					</textarea>
					<InputImg :src="paperClipIcon" type="file" />
					<InputImg :src="sendMessageIcon" type="submit" />
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import InputImg from "./ui/InputImg.vue"
import Input from "./ui/Input.vue"
import dayjs from "dayjs"
import socket from "@/utils/socket"
import Dropdown from "./ui/Dropdown.vue"
import Modal from "./ui/Modal.vue"
import paperClipIcon from "@/assets/icons/paperClip.svg"
import sendMessageIcon from "@/assets/icons/sendMessage.svg"
import Messages from "./Messages.vue"
import { useI18n } from "vue-i18n"
import { ref } from "vue"
import { useToogleModal } from "@/hooks/useToogle"
import { storage } from "@/utils/storage"
import { useToogleMenu } from "@/hooks/useToogle"
import { filterUsers } from '@/utils/filterDatas';
import { useUsersStore } from "@/stores/UsersStore"
import type { IMessage } from "@/interfaces/iMessage"
import type { IMenu } from "@/interfaces/iMenu"

const { t } = useI18n({ useScope: 'global' })

const chat = defineProps<{
	name: string
	uuid: string
}>()

defineEmits(['closeChat'])

socket.emit('join', chat.uuid)

const findUser = ref<string>('')

const usersStore = useUsersStore()
usersStore.getUsersData()

const uuids = ref<string[]>([])
const error = ref<boolean>(false)

const sendInvitation = (usersUuids: string[], uuidRoom: string, titleRoom: string) => {
	if (usersUuids.length) {
		usersUuids.forEach(userUuid => {
			socket.emit('personalInvite', userUuid)
			socket.emit('messageInvite', { uuidRoom, titleRoom, userUuid })
			socket.emit('personalInvite', storage.getData('uuid'))
		})

		error.value = false
		uuids.value = [];

		closeModal()
	} else {
		error.value = true
	}
}

const isOpenMenu = ref<boolean>(false)
const menuTarget = ref<HTMLElement | null>(null);

const { toogle: toogleDropdown } = useToogleMenu(isOpenMenu, menuTarget)
const { openModal, closeModal, isOpenModal } = useToogleModal()

const chatMenu = ref<IMenu[]>([
	{ title: t('addUsers'), onClick: openModal }
])

const message = ref<string>("")
const messages = ref<IMessage[]>([])

const sendMessage = () => {
	if (message.value) {
		socket.emit(
			'message', message.value,
			Number(storage.getData("id")),
			dayjs().format('HH:mm'),
			chat.uuid
		)
		message.value = ''
	}
}

socket.on('message', (message, id) => {
	messages.value.push({ message, id, sendTime: dayjs().format('HH:mm') });
	requestAnimationFrame(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
});
</script>
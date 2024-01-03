<template>
	<transition>
		<div v-if="isInviteRoom && showChats" class="fixed bottom-0 right-0 w-[380px] bg-blue-600 p-4 rounded-xl">
			<p class="mb-2">Вас пригласили в чат</p>
			<UIButton title="Войти" @click.prevent="$emit('enterChat')" />
			<UIButton @click.prevent="closeModal()" class="bg-red-600 hover:bg-red-700 ml-3" title="Закрыть" />
		</div>
	</transition>
</template>

<script setup lang="ts">
import UIButton from "@/components/ui/UIButton.vue"
import socket from "@/utils/socket"
import { reactive, ref } from "vue";

defineProps<{
	showChats: boolean
}>()

defineEmits(['enterChat'])

interface IInviteRoom {
	nameRoom: string
	uuidRoom: string
}

const inviteRoom: IInviteRoom = reactive({
	nameRoom: "",
	uuidRoom: ""
})

let isInviteRoom = ref<boolean>(false)
const closeModal = () => isInviteRoom.value = false

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
.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
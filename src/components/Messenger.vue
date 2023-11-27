<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="p-2">
			<!-- <div class="p-3 flex flex-col items-end justify-end rounded-2xl bg-blue-500 mt-3" v-for="user in messages"
				:key="user.id">
				<div class="mr-10">{{ user.message }}</div>
				<span class="text-[13px] inline-block mt-[-1%] text-gray-300">{{ user.sendTime }}</span>
			</div> -->
		</div>
		<div class="w-full bg-blue-900 p-3 sticky bottom-0 mt-20">
			<form class="flex justify-center" autocomplete="off" @submit.prevent="">
				<textarea :placeholder="t('messengerInputPlaceholder')"
					class="rounded-md p-2 w-full bg-[#09F] resize-none focus:outline-none"></textarea>
				<Input ui-src="@/../public/paperClip.svg" input-type="file" />
				<Input ui-src="@/../public/sendMessage.svg" input-type="submit" />
			</form>
		</div>
</template>

<script setup lang="ts">
import Input from "@/components/ui/Input.vue"
import { ref } from "vue";
import dayjs from "dayjs"
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

interface IMessage {
	id: string
	username?: string
	message: string
	sendTime?: string
}

// const message = ref<string>("")
// const messages = ref<IMessage[]>([])

// function sendMessage() {
// 	if (message.value) {
// 		socket.emit('message', message.value)
// 		message.value = ''
// 	}
// }

// socket.on('message', (message, id) => {
// 	messages.value.push({ message, id, sendTime: dayjs().format('HH:mm') })
// 	window.scrollTo(1, document.body.scrollHeight);
// })
</script>
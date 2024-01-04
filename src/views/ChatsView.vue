<template>
	<div v-if="showChats === true">
		<h1 class="text-center text-3xl mt-2">{{ t('chatsList') }}</h1>
		<div class="m-2">
			<div class="flex items-center mt-3 justify-between flex-wrap">
				<!-- <div class="flex flex-wrap justify-center">
					<UIButton @click="showCreateChatForm = !showCreateChatForm" :title="t('createChat')" />
					<FormChat class="ml-4" v-if="showCreateChatForm" />
				</div> -->
				<UIInput class="p-2" bg="#0054A8" v-model:value="findChat" />
				<UIButtonMenu/>
			</div>
			<ul class="mt-5" v-for="chat in filterChats(data.user.chats, findChat)" :key="chat.id">
				<li
					class="bg-blue-500 p-5 rounded-md flex justify-between items-center cursor-pointer hover:bg-blue-400 ease-in duration-100 mt-2">
					{{ chat.roomName }}
					<div class="flex w-20 justify-between">
						<img
							:title="t('goChat')" 
							@click="enterChat(chat.uuid, chat.roomName)" 
							src="@/assets/icons/chat.svg"
							>
						<img 
							:title="t('delete')" 
							@click="deleteChat(chat.id)" 
							src="@/assets/icons/trash.svg">
					</div>
				</li>
			</ul>
		</div>
	</div>
	<Chat @close-chat="closeChat" :uuid="uuid" :name="room" v-else />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/stores/UsersStore";
import FormChat from "@/components/ui/UIFormChat.vue"
import Chat from "@/components/ChatContainer.vue";
import UIButtonMenu from "@/components/ui/UIButtonMenu.vue";
import UIButton from "@/components/ui/UIButton.vue";
import { deleteChat } from "@/api/chats"
import { filterChats } from "@/utils/filterUsersAndChats";
import UIInput from "@/components/ui/UIInput.vue";
import { useEnterChat } from "@/hooks/useEnterChat";
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

const findChat = ref<string>('')

const data = useUsersStore()
onMounted(async () => await data.getUserData())

const showCreateChatForm = ref<boolean>(false)

const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()
</script>
<template>
	<div ref="body" class="h-full overflow-hidden" v-if="showChats === true">
		<h1 class="text-center text-3xl mt-2">{{ t('chatsList') }}</h1>
		<div class="m-2">
			<div class="flex items-center mt-3 justify-between flex-wrap">
				<UIInput class="p-2" bg="#0054A8" v-model:value="findChat" />
				<UIButtonMenu @click="toogleMenu()" />
				<div v-if="openMenu" class="text-lg absolute top-24 right-7 bg-blue-400 text-white p-2 rounded-sm">
					<p class="cursor-pointer hover:bg-blue-300 p-2 rounded-md">{{ t('createChat') }}</p>
				</div>
			</div>
			<ul class="mt-6" v-for="chat in filterChats(data.user.chats, findChat)" :key="chat.id">
				<li
					class="bg-blue-500 p-5 rounded-md flex justify-between items-center cursor-pointer hover:bg-blue-400 ease-in duration-100 mt-2">
					{{ chat.roomName }}
					<div class="flex w-20 justify-between">
						<img :title="t('goChat')" @click="enterChat(chat.uuid, chat.roomName)" src="@/assets/icons/chat.svg">
						<img :title="t('delete')" @click="deleteChat(chat.id)" src="@/assets/icons/trash.svg">
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
import { deleteChat } from "@/api/chats"
import { filterChats } from "@/utils/filterUsersAndChats";
import UIInput from "@/components/ui/UIInput.vue";
import { useEnterChat } from "@/hooks/useEnter";
import { useI18n } from "vue-i18n"
import { useToogleMenu } from "@/hooks/useToogle";

const { body, openMenu, toogleMenu } = useToogleMenu()

const { t } = useI18n({ useScope: 'global' })

const findChat = ref<string>('')

const data = useUsersStore()
onMounted(async () => await data.getUserData())

const showCreateChatForm = ref<boolean>(false)

const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()
</script>@/hooks/useToogle
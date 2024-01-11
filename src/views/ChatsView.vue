<template>
	<div ref="body" class="min-h-screen overflow-x-hidden" v-if="showChats === true">
		<h1 class="text-center text-3xl mt-2">{{ t('chatsList') }}</h1>
		<div class="m-2">
			<div class="flex items-center mt-3 justify-between flex-wrap">
				<UIInput class="p-2" bg="#0054A8" v-model:value="findChat" />
				<UIMenu :is-open-menu="isOpenMenu" @toogle-menu="toogleMenu" :menu="chatListMenu" />
				<!-- <div v-if="isOpenMenu" class="text-lg absolute top-24 right-7 bg-blue-400 text-white p-2 rounded-sm">
					<p @click="openModal" class="cursor-pointer hover:bg-blue-300 p-2 rounded-md">{{ t('createChat') }}</p>
				</div> -->
				<UIModal @submit-modal="addChat(newChat)" @closeModal="closeModal" :is-open-modal="isOpenModal"
					title="Заполните поля" :title-success-button="t('create')">
					<UIInput class="p-3" v-model:value="newChat" :placeholder="t('chatName')" />
				</UIModal>
			</div>
			<div v-if="usersStore?.user?.chats?.length">
				<ul class="mt-4" v-for="chat in filterChats(usersStore.user.chats, findChat)" :key="chat.id">
					<li class="bg-blue-500 p-5 rounded-md flex justify-between items-center mt-2">
						{{ chat.roomName }}
						<div class="flex w-20 justify-between">
							<img :title="t('goChat')" @click="enterChat(chat.uuid, chat.roomName)"
								src="@/assets/icons/chat.svg">
							<img :title="t('delete')" @click="deleteChat(chat.id)"
								src="@/assets/icons/trash.svg">
						</div>
					</li>
				</ul>
			</div>
			<div class="mt-6" v-else>Чатов пока нет.</div>
		</div>
	</div>
	<Chat @close-chat="closeChat" :uuid="uuid" :name="room" v-else />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/stores/UsersStore";
import { addChat } from '@/api/chats';
import Chat from "@/components/ChatContainer.vue";
import UIMenu from "@/components/ui/UIMenu.vue";
import { deleteChat } from "@/api/chats"
import { filterChats } from "@/utils/filterDatas";
import UIInput from "@/components/ui/UIInput.vue";
import { useEnterChat } from "@/hooks/useEnter";
import { useI18n } from "vue-i18n"
import { useToogleMenu, useToogleModal } from "@/hooks/useToogle";
import UIModal from "@/components/ui/UIModal.vue";
import type { IMenu } from "@/interfaces/iMenu";

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()
onMounted(async () => await usersStore.getUserData())

const newChat = ref<string>('')
const findChat = ref<string>('')

const { body, isOpenMenu, toogleMenu } = useToogleMenu()
const { openModal, closeModal, isOpenModal } = useToogleModal()
const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()

const chatListMenu = ref<IMenu[]>([
	{ title: t('createChat'), onClick: openModal }
])
</script>
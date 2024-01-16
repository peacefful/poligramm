<template>
	<div class="min-h-screen overflow-x-hidden" v-if="showChats === true">
		<h1 class="text-center text-3xl mt-2">{{ t('chatsList') }}</h1>
		<div class="m-2">
			<div class="flex items-center mt-3 justify-between">
				<div @click="toogleAside"
					class="mr-auto rounded-full p-1 active:bg-[#3090df] ease-in duration-100 block ng:hidden">
					<img src="@/assets/icons/burger-menu.svg">
				</div>
				<Aside v-if="isOpenAside" class="fixed top-0 left-0 bg-[#00000084] h-screen w-full z-10" />
				<Input class="p-3 mr-1" bg="#0054A8" v-model:value="findChat" />
				<Drobdown :is-open-menu="isOpenMenu" @toogle-menu="toogleDropdown" :menu="chatListMenu" />
				<Modal @submit-modal="addChat(newChat)" @closeModal="closeModal" :is-open-modal="isOpenModal"
					title="Заполните поля" :title-success-button="t('create')">
					<Input class="p-3" v-model:value="newChat" :placeholder="t('chatName')" />
				</Modal>
			</div>
			<div v-if="usersStore?.user?.chats?.length">
				<ul class="mt-4" v-for="chat in filterChats(usersStore.user.chats, findChat)" :key="chat.id">
					<li class="bg-blue-500 p-5 rounded-md flex justify-between items-center mt-2">
						{{ chat.roomName }}
						<div class="flex w-20 justify-between">
							<img :title="t('goChat')" @click="enterChat(chat.uuid, chat.roomName)" src="@/assets/icons/chat.svg">
							<img :title="t('delete')" @click="deleteChat(chat.id)" src="@/assets/icons/trash.svg">
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
import Chat from "@/components/Chat.vue";
import Drobdown from "@/components/ui/Drobdown.vue";
import Input from "@/components/ui/Input.vue";
import Modal from "@/components/ui/Modal.vue";
import Aside from "@/components/layout/Aside.vue";
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/stores/UsersStore";
import { addChat } from '@/api/chats';
import { deleteChat } from "@/api/chats"
import { filterChats } from "@/utils/filterDatas";
import { useEnterChat } from "@/hooks/useEnter";
import { useI18n } from "vue-i18n"
import { useToogleMenu, useToogleModal } from "@/hooks/useToogle";
import type { IMenu } from "@/interfaces/iMenu";

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()
onMounted(async () => await usersStore.getUserData())

const newChat = ref<string>('')
const findChat = ref<string>('')

const isOpenAside = ref<boolean>(false);
const isOpenMenu = ref<boolean>(false);

const asideTarget = ref<HTMLElement | null>(null);
const menuTarget = ref<HTMLElement | null>(null);

const { toogleMenu: toogleAside } = useToogleMenu(isOpenAside, asideTarget);
const { toogleMenu: toogleDropdown } = useToogleMenu(isOpenMenu, menuTarget);

const { openModal, closeModal, isOpenModal } = useToogleModal()
const { enterChat, closeChat, showChats, uuid, room } = useEnterChat()

const chatListMenu = ref<IMenu[]>([
	{ title: t('createChat'), onClick: openModal }
])
</script>
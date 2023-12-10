<template>
	<transition>
		<div v-if="isOpenModal" class="modal-form">
			<div class="modal-form__box">
				<h3 class="modal-form__title">Выберите пользователя (-ей)</h3>
				<input type="text" class="mb-3" style="padding: 1%;" placeholder="Поиск" v-model="findUser">
				<div class="modal-form__users" v-for="user in filterUsers(data.allUsers, findUser)" :key="user.id">
					<label class="flex justify-between items-center" :for="user.name">
						{{ user.name }} {{ user.surname }} ({{ user.rank }})
						<input v-model="uuids" :id="user.name" :value="user.uuid" class="h-5 w-5" type="checkbox">
					</label>
				</div>
				<CustomButton @click.prevent="sendInvitation(uuids, uuidRoom)" class="mt-10" title="Добавить" />
				<CustomButton @click.prevent="$emit('closeModal')" class="ml-3 bg-red-600 hover:bg-red-700" title="Закрыть" />
				{{ uuids }}
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue';
import { useUsersStore } from '@/stores/UsersStore';
import socket from '@/utils/socket';
import { ref } from 'vue';
import { useChatsStore } from '@/stores/ChatsStore';
import { filterUsers } from '@/utils/filterUsersAndChats';

defineProps<{
	uuidRoom: string
	isOpenModal: boolean
}>()

defineEmits(["closeModal"])

const chat = useChatsStore()

const data = useUsersStore()
data.getUsersData()

const findUser = ref<string>('')

const uuids = ref<string[]>([])

const sendInvitation = (usersUuids: string[], roomName: string) => {
	usersUuids.forEach(uuid => {
		socket.emit('personalInvite', chat.updateRoom(uuid))
		socket.emit('messageInvite', {
			roomName, 
			uuidRoom: uuid
		})
	})

	uuids.value = [];
}
</script>

<style lang="scss" scoped>
.modal-form {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100vh;

		background-color: rgba(21, 21, 21, 0.665);
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-y: auto;
		z-index: 3;

		.modal-form__box {
			padding: 1%;
			width: 50%;
			border-radius: 15px;
			background-color: black;
			overflow-y: auto;
			.modal-form__title {
				font-size: 30px;
				margin-bottom: 2%;
			}

			.modal-form__users {
				margin-top: 1%;
			}
		}
	}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
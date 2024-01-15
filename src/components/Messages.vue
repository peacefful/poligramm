<template>
	<div class="bg-blue-500 items-end user-message" v-if="userId === id">
		<div class="mb-1 user-message_message">{{ message }}</div>
		<span class="user-message_time">Вы {{ time }}</span>
	</div>
	<div v-else class="bg-blue-400 user-message">
		<div class="mr-10 user-message_message">{{ message }}</div>
		<span class="user-message_time">{{ time }}</span>
	</div>
</template>

<script setup lang="ts">
import { storage } from '@/utils/storage'
import { ref } from 'vue'

defineProps<{
	id: number
	message: string
	time: string
}>()

const userId = ref<number>(Number(storage.getData('id')))
</script>

<style scoped lang="scss">
.user-message {
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	margin-top: 0.75rem;

	&_message {
		max-width: 40rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: pre-line;
		overflow-wrap: break-word;
	}

	&_time {
		font-size: 13px;
		margin-top: 0.1%;
		display: inline-block;
		color: rgb(209 213 219);
	}
}

@media (max-width: 1400px) {
	.user-message {
		&_message {
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: pre-line;
			overflow-wrap: break-word;
		}
	}
}
</style>
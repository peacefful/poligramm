<template>
	<div class="bg-blue-500 items-end user-message" v-if="userId === id">
		<div class="user-message_text">{{ message }}</div>
		<span class="user-message_time">{{ t('you') }} {{ time }}</span>
	</div>
	
	<div v-else class="bg-blue-400 user-message">
		<div class="user-message_text">{{ message }}</div>
		<span class="user-message_time">{{ username }} {{ time }}</span>
	</div>
</template>

<script setup lang="ts">
import { storage } from '@/utils/storage'
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

defineProps<{
	id: number
	message: string
	time: string
	username: string|undefined|null
}>()

const userId:number|null = Number(storage.getData('id'))
</script>

<style scoped lang="scss">
.user-message {
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	margin-top: 0.75rem;
	&_text {
		max-width: 36rem;
		overflow-wrap: break-word;
	}
	&_time {
		font-size: 13px;
		color: rgb(209 213 219);
	}
}

@media (max-width: 1400px) {
	.user-message {
		&_text {
			max-width: 100%;
		}
	}
}
</style>
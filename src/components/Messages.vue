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
	@apply p-3 flex flex-col rounded-2xl mt-3;
	&_text {
		@apply max-w-xl break-words;
	}
	&_time {
		@apply text-[13px] text-[#d1d5db];
	}
}

@media (max-width: 1400px) {
	.user-message {
		&_text {
			@apply max-w-full
		}
	}
}
</style>
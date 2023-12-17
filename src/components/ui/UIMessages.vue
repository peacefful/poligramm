<template>
	<div class="bg-blue-500 p-3 flex flex-col items-end justify-end rounded-2xl mt-3" v-if="userId === id">
		<div class="mr-10 mb-1 max-w-md">{{ message }}</div>
		<span class="text-[13px] inline-block mt-[-1%] text-gray-300">Вы {{ time }}</span>
	</div>
	<div v-else class="bg-blue-400 p-3 flex flex-col justify-end rounded-2xl mt-3">
		<div class="mr-10">{{ message }}</div>
		<span class="text-[13px] inline-block  text-gray-300">{{ time }}</span>
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
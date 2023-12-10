<template>
	<div class="bg-blue-400 h-full">
		<div v-if="invites.length" class="text-center">
			<h2>Ваши приглашения</h2>
		</div>
		<div v-else class="text-center">
			<h2>Приглашений пока нет</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
import socket from '@/utils/socket';
import { ref } from 'vue';

const invites = ref([])
</script>
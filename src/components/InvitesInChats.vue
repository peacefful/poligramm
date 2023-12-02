<template>
	<div>
		<div v-if="invites.length" class="text-center mt-2">
			<h2>Ваши приглашения</h2>
		</div>
		<div v-else class="text-center mt-2">
			<h2>Приглашений пока нет</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const invites = ref([])

</script>
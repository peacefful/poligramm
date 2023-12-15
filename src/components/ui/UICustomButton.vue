<template>
	<button class="bg-[#299fff] rounded-md p-2 hover:bg-[#167ed3] ease-out duration-150">
		{{ title }}
	</button>
</template>

<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>
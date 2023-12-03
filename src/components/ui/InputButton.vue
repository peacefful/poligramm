<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="rounded-2xl bg-polligramBackground p-6 ml-4">
		<input :type="inputType" :id="inputType" class="hidden">
		<label :for="inputType">
			<img :src="uiSrc" alt="">
		</label>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	uiSrc?:string
	inputType?:string
}>()
</script>

<style scoped>
div {
	background: #0054A8;
}
img {
	cursor: pointer
}
</style>
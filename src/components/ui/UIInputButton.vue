<template>
	<div class="rounded-2xl bg-[#0054A8] p-6 ml-4">
		<input :type="inputType" :id="inputType" class="hidden ">
		<label :for="inputType" class="cursor-pointer">
			<img :src="uiSrc" alt="">
		</label>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	uiSrc:string
	inputType:string
}>()
</script>
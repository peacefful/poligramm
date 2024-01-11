<template>
	<div class="rounded-2xl bg-[#0054A8] p-6 ml-4">
		<input :type="type" :id="type" class="hidden ">
		<label :for="type" class="cursor-pointer">
			<img :src="src" alt="">
		</label>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	src:string
	type:string
}>()
</script>
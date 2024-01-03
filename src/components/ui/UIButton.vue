<template>
	<button :class="['button', `button_${color}`]">
		{{ title }}
	</button>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	color?: string
}>()
</script>

<style scoped lang="scss">
.button {
	background-color: #299fff;
	border-radius: 8px;
	transition: all ease-out 0.1s;
	padding: 0.5rem;
	&:hover {
		background-color: #167ed3;
	}
	&:active {
		background-color: #6fbeff;
	}
	&_danger {
		background-color: rgb(220 38 38);
		&:hover {
			background-color: rgb(185 28 28);
		}
		&:active {
			background-color: rgb(239 68 68);
		}
	}
}</style>
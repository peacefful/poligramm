<template>
	<button :type="type" :class="['button', `button_${color}`]">
		{{ title }}
	</button>
</template>

<script setup lang="ts">

interface IButtonProps {
	title: string
	color?: string
	type?: "submit" | "reset";
}

withDefaults(defineProps<IButtonProps>(), {
	type: "submit"
})
</script>

<style scoped lang="scss">
.button {
	@apply bg-[#299fff] rounded-lg transition-all ease-out duration-100 p-2 hover:bg-[#167ed3] active:bg-[#6fbeff];
	&_danger {
		@apply bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#ef4444];
	}
}</style>
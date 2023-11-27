<template>
	<input type="radio" class="hidden custom-radio" :id="inputId" name="themeGroup">
	<label :for="inputId" :style="radioStyle" class="cursor-pointer mt-2 ml-2 w-[30px] h-[30px] rounded-md"></label>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const radio = defineProps<{
	inputId: string
	theme: string
}>()

const radioStyle = reactive({
	"background-color": radio.theme
})

</script>

<style scoped>
input[type=radio]:checked + label::before {
	content: '✔';
	font-size: 1.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
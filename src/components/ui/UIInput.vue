<template>
	<input :style="{ background: bg }" class="bg-zinc-900 text-zinc-300 " type="text" v-model="value" placeholder="Поиск">
</template>

<script setup lang="ts">
import { computed } from 'vue'

const inputProps = defineProps<{
	value: string
	bg?: string
}>()

const inputEmits = defineEmits(['update:value'])

const value = computed({
	get() {
		return inputProps.value
	},
	set(value) {
		inputEmits('update:value', value)
	}
})

const bg = computed(() => inputProps.bg || 'bg-zinc-900')
</script>
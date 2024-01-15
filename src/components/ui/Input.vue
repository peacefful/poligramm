<template>
	<input 
		:style="{ background: bg }" 
		class="bg-zinc-900 text-zinc-300" 
		:type="type" 
		v-model="value" 
		:placeholder="t('search')">
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

interface IInputProps {
	value: string
	bg?: string
	type?:string
}

const inputProps = withDefaults(defineProps<IInputProps>(), {
	type: "text"
})

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

<style scoped lang="scss">
input {
	&:focus {
		outline: 1.5px solid rgb(0, 128, 255);
	}
}
</style>
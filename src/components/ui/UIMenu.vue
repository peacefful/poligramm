<template>
	<img @click="$emit('toogleMenu')"
		class="p-1 rounded-full hover:bg-[#48adff] ease-in duration-100 active:bg-[#3090df] cursor-pointer"
		src="@/assets/icons/menu.svg">
	<div v-if="isOpenMenu" class='text-lg absolute top-10 right-10 bg-blue-400 text-white p-2 rounded-sm'>
		<div v-for="(m, i) in menu" :key="i">
			<p @click="m.onClick" class="cursor-pointer hover:bg-blue-300 p-2 rounded-md">
				{{ m.title }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IMenu } from '@/interfaces/iMenu';

defineProps<{
	isOpenMenu: boolean
	menu: IMenu[]
}>()

defineEmits(["toogleMenu"])
</script>
<template>
	<main>
		<LayoutMain v-if="useRoute().fullPath !== '/' &&
			useRoute().fullPath !== '/registration'" />
		<div v-else>
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import LayoutMain from './components/layout/Main/LayoutMain.vue';
import { RouterView, useRoute } from 'vue-router';
import { checkTokenExpiration } from "./utils/checkTokenExpiration"

checkTokenExpiration()
</script>
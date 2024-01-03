<template>
	<main>
		<LayoutAside v-if="useRoute().fullPath !== '/' &&
			useRoute().fullPath !== '/registration'" />
		<div v-else>
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import LayoutAside from './components/layout/Aside/LayoutAside.vue';
import { RouterView, useRoute } from 'vue-router';
</script>
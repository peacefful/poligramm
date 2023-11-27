<template>
	<div class="flex justify-between items-center">
		<h2>{{ t('geolocation') }}</h2>
		<input class="w-6 h-6" type="checkbox">
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })
</script>
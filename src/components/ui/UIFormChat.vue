<template>
	<form @submit.prevent="addChat(room)">
		<div class="flex justify-center sm:flex">
			<UIInput class="px-2" bg="#0054A8" v-model:value="room" :placeholder="t('chatName')"/>
			<CustomButton type="submit" :title="t('create')" class="ml-3"/>
		</div>
	</form>
</template>

<script setup lang="ts">
import CustomButton from './UICustomButton.vue';
import UIInput from './UIInput.vue';
import { ref } from 'vue';
import { addChat } from '@/api/chats';
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

const room = ref<string>('')
</script>
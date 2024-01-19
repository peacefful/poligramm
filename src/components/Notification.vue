<template>
	<transition>
		<div v-if="isInviteRoom" class="fixed bottom-0 right-0 w-[400px] bg-blue-600 p-6 rounded-lg">
			<div class="flex justify-between items-center">
				<p>{{ t('inviteToChat') }}</p>
				<img 
					@click.prevent="$emit('closeNotification')" 
					class="hover:rotate-90 transition ease-in duration-100"
					src="@/assets/icons/close.svg">
			</div>
			<Button 
				class="mt-5" 
				:title="t('signIn')" 
				@click.prevent="$emit('enterChat')" />
		</div>
	</transition>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

defineProps<{
	isInviteRoom: boolean
}>()

defineEmits(['enterChat', 'closeNotification'])
</script>
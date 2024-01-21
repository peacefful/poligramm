<template>
	<transition>
		<div v-if="isInviteRoom" class="notification">
			<div class="notification__wrapper">
				<p>{{ t('inviteToChat') }}</p>
				<img 
					@click.prevent="$emit('closeNotification')" 
					class="notification__close"
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

<style scoped lang="scss">
.notification {
	@apply fixed bottom-0 right-0 bg-blue-600 p-6 rounded-lg w-full sm:w-[400px];
	&__wrapper {
		@apply flex justify-between items-center;
		.notification__close {
			@apply hover:rotate-90 transition ease-in duration-100;
		}
	}
}
</style>
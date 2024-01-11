<template>
	<transition>
		<div v-if="isInviteRoom && showChats" class="fixed bottom-0 right-0 w-[400px] bg-blue-600 p-6 rounded-lg">
			<div class="flex justify-between items-center">
				<p>{{ t('inviteToChat') }}</p>
				<img @click.prevent="$emit('closeNotification')" class="hover:rotate-90 transition ease-in duration-100"
					src="@/assets/icons/close.svg">
			</div>
			<UIButton class="mt-5" :title="t('signIn')" @click.prevent="$emit('enterChat')" />
		</div>
	</transition>
</template>

<script setup lang="ts">
import UIButton from "@/components/ui/UIButton.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

defineProps<{
	isInviteRoom: boolean
	showChats: boolean
}>()

defineEmits(['enterChat', 'closeNotification'])
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
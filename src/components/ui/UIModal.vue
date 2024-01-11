<template>
	<transition>
		<div v-if="isOpenModal" class="modal-form">
			<form class="modal-form__box" @submit.prevent="$emit('submitModal')">
				<div>
					<h3 class="modal-form__title">{{ title }}</h3>
					<slot></slot>
				</div>
				<div>
					<UIButton class="mt-10" :title="titleSuccessButton" />
					<UIButton @click.prevent="$emit('closeModal')" class="ml-3" color="danger" :title="t('close')" />
					<div v-if="error" class="text-red-600 mt-2">
						{{ t("errorSelectUsers") }}
					</div>
				</div>
			</form>
		</div>
	</transition>
</template>

<script setup lang="ts">
import UIButton from './UIButton.vue';
import { useI18n } from "vue-i18n"

const { t } = useI18n({ useScope: 'global' })

defineProps<{
	isOpenModal: boolean
	error?: boolean
	title: string
	titleSuccessButton: string
}>()

defineEmits(["closeModal", "submitModal"])
</script>

<style lang="scss" scoped>
.modal-form {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	background-color: rgba(21, 21, 21, 0.665);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
	z-index: 3;

	.modal-form__box {
		padding: 2%;
		width: 90%;
		height: 80%;
		border-radius: 15px;
		background-color: black;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.modal-form__title {
			font-size: 30px;
			margin-bottom: 2%;
		}

		.modal-form__users {
			margin-top: 1%;
		}
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
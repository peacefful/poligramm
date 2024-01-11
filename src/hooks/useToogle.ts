import { onUpdated, ref } from "vue";

export const useToogleModal = () => {
	const isOpenModal = ref<boolean>(false)

	const openModal = () => isOpenModal.value = true
	const closeModal = () => isOpenModal.value = false

	return { isOpenModal, openModal, closeModal }
}

export const useToogleMenu = () => {
	const body = ref<HTMLInputElement | null>(null)
	const isOpenMenu = ref<boolean>(false)

	const toogleMenu = () => isOpenMenu.value = !isOpenMenu.value

	onUpdated(() => {
		const clickHandler = (event: MouseEvent) => {
			if (!event.target || !(event.target instanceof Element) ||
				(!event.target.closest('.bg-blue-600') && !event.target.closest('.p-1'))) {
					isOpenMenu.value = false;
			}
		};

		if (isOpenMenu.value) {
			body.value?.addEventListener("click", clickHandler);
		} else {
			body.value?.removeEventListener("click", clickHandler);
		}
	})

	return { body, isOpenMenu, toogleMenu }
}
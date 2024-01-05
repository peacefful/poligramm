import { onUpdated, ref } from "vue";

export const useToogleModal = () => {
	const isOpenModal = ref<boolean>(false)

	const openModal = () => isOpenModal.value = true
	const closeModal = () => isOpenModal.value = false

	return { isOpenModal, openModal, closeModal }
}

export const useToogleMenu = () => {
	const container = ref<HTMLInputElement | null>(null)
	const openMenu = ref<boolean>(false)

	const toogleMenu = () => openMenu.value = !openMenu.value

	onUpdated(() => {
		const clickHandler = (event: MouseEvent) => {
			if (!event.target || !(event.target instanceof Element) ||
				(!event.target.closest('.bg-blue-600') && !event.target.closest('.p-1'))) {
				openMenu.value = false;
			}
		};

		if (openMenu.value) {
			container.value?.addEventListener("click", clickHandler);
		} else {
			container.value?.removeEventListener("click", clickHandler);
		}
	})

	return { container, openMenu, toogleMenu }
}
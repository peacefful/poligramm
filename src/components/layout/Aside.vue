<template>
	<aside class="min-h-screen">
		<div class="p-2 fixed w-[364px] bg-blue-900 min-h-screen flex flex-col justify-between">
			<Profile />
			<div class="mb-2">
				<ToogleLanguage />
				<Button class="w-full mt-4" color="danger" @click="logOut()" title="Выйти" />
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
import ToogleLanguage from "@/components/ToogleLanguage.vue"
import Profile from "@/components/Profile.vue"
import Button from "@/components/ui/Button.vue"
import router from "@/router"

const logOut = () => {
	localStorage.clear()
	return router.push("/")
}
</script>
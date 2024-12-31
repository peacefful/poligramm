<template>
  <NuxtLayout v-if="checkPath()" name="custom">
    <NuxtPage />
  </NuxtLayout>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const checkPath = () => {
  const currentRoute: string = useRoute().fullPath;
  return currentRoute !== "/" && currentRoute !== "/signup";
};
</script>

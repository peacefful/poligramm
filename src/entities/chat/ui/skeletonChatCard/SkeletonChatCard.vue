<template>
  <section class="p-3 flex justify-between items-start">
    <div class="flex items-center gap-3">
      <Skeleton class="rounded-full w-14 h-14" />
      <div class="flex flex-col gap-4">
        <Skeleton class="rounded-2xl w-12 h-4" />
        <Skeleton class="rounded-2xl w-[200px] h-4" />
      </div>
    </div>
    <Skeleton class="rounded-2xl w-11 h-4" />
  </section>
</template>

<script setup lang="ts">
import {Skeleton} from "@/shared/ui/skeleton";
</script>
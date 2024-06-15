<template>
  <InputFile type="file" class="p-2 mr-4 hover:rotate-90 ease-in duration-150">
    <UploadFileIcon />
  </InputFile>
</template>

<script setup lang="ts">
import UploadFileIcon from '@/shared/assets/icons/UploadFileIcon.vue'
import { InputFile } from '@/shared/ui/input'
</script>

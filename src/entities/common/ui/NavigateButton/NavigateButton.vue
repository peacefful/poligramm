<template>
  <button
    class="mt-2 text-xl flex items-center w-full p-3 rounded-md hover:bg-[#f0f0f0] ease-out duration-200"
    @click="$emit('action')"
  >
    <Icon class="h-7 w-7 mr-4" :name="icon" />
    {{ t(`${title}`) }}
  </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { type TNavigate } from '@/shared/types'
import { Icon } from '@/shared/ui/icon'

const { t } = useI18n({ useScope: 'global' })

type TNavigateButton = Omit<TNavigate, 'id' | 'action'>

defineProps<TNavigateButton>()

defineEmits(['action'])
</script>

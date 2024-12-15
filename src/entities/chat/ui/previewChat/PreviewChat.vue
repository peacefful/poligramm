<template>
  <section class="flex flex-col h-full">
    <div>
      <h1 class="text-3xl font-bold">{{ chat.roomName }}</h1>
      <p class="mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae tempore
        consequuntur repellendus suscipit nemo harum in magnam quo, totam, cupiditate nulla, placeat
        et. Perspiciatis nihil soluta corporis dolores est?
      </p>
      <div class="mt-12 grid grid-cols-3 gap-1">
        <div>
          <Doughnut :id="'my-chart-id-2'" :options="options" :data="chartData1" />
        </div>
        <div>
          <Doughnut :id="'my-chart-id-2'" :options="options" :data="chartData2" />
        </div>
        <div>
          <Doughnut :id="'my-chart-id-2'" :options="options" :data="chartData2" />
        </div>
      </div>
    </div>
    <div class="mt-auto ml-auto flex gap-2">
      <Button @click="$emit('closeModal')" class="w-32" color="primary" :is-rounded-lg="true">
        Закрыть
      </Button>
      <Button class="w-32" :is-rounded-lg="true"> Удалить чат </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type TChat } from '@/shared/types'
import { Doughnut } from 'vue-chartjs'
import { Button } from '@/shared/ui/button'
import { ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

defineProps<{ chat: TChat }>()
defineEmits(['closeModal'])

ChartJS.register(Tooltip, Legend, ArcElement)

const chartData1 = ref({
  labels: ['Text', 'Files', 'Others'],
  datasets: [
    {
      backgroundColor: ['#242424', '#bc0ce8', '#279eff'],
      data: [50, 2, 27]
    }
  ]
})

const chartData2 = ref({
  labels: ['Images', 'Videos'],
  datasets: [
    {
      backgroundColor: ['#242424', '#279eff'],
      data: [30, 10]
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<style scoped>
#my-chart-id-1,
#my-chart-id-2 {
  height: 200px; /* Уменьшаем высоту */
  width: 200px; /* Уменьшаем ширину */
}
</style>

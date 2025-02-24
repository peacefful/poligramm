import type { TAnaliseChatDiagram } from '@/entities/chat'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

type IDiagramChat = {
  fileLength: number
  textLength: number
}

export const useChartChat = (analiseData: IDiagramChat) => {
  const { t } = useI18n({ useScope: 'global' })
  ChartJS.register(Tooltip, Legend, ArcElement)

  console.log('analiseData', analiseData);
  

  const chartData = ref({
    labels: [t('textMessage'), t('files')],
    datasets: [
      {
        backgroundColor: ['#242424', '#bc0ce8'],
        data: [analiseData.textLength, analiseData?.fileLength]
      }
    ]
  })

  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  const chartKey = ref(0)

  watch(
    () => [analiseData?.textLength, analiseData?.fileLength],
    ([textLength, fileLength]) => {
      chartData.value.datasets[0].data = [textLength, fileLength]
      chartKey.value += 1
    }
  )

  return {
    chartData,
    options,
    chartKey
  }
}

<template>
  <Form title="authorization" button-title="signIn" :handler-submit="onSubmit">
    <template #labels>
      <VeeInput
        name="login"
        class="vee-input"
        error-name="incorrectesLogin"
        v-model="userData.login"
      />
      <section class="mt">
        <VeeInput
          name="password"
          type="password"
          class="vee-input"
          error-name="incorrectesPassword"
          v-model="userData.password"
        />
      </section>
      <ToastMessage v-if="isError" type-toast="error">
        <template v-if="errorStatus === 404">{{ t('notAccount', 2) }}</template>
        <template v-else>{{ t('notVerifyLoginOrPassword') }}</template>
      </ToastMessage>
    </template>
    <template #hint>
      {{ t('notAccount') }}
      <router-link class="underline" to="/signup">
        {{ t('signUp', 2) }}
      </router-link>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { ApiAuth, AuthModel } from '@/entities/auth'
import { Form } from '@/shared/ui/form'
import { VeeInput } from '@/shared/ui/input'
import { ToastMessage } from '@/entities/auth'
import { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import * as yup from 'yup'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement)

const router = useRouter()

const { t } = useI18n({ useScope: 'global' })

const userData: AuthModel.TAuthData = reactive({
  login: '',
  password: ''
})

const isError = ref<boolean>(false)
const errorStatus = ref<number | undefined>(0)

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    ...AuthModel.authValidator
  })
})

const onSubmit = handleSubmit(async () => {
  const authUser: AuthModel.TAuthResponse | AxiosError = await ApiAuth.authorization(userData)
  if (!(authUser instanceof AxiosError) && authUser.accessToken) {
    router.push('/chats')
  } else {
    isError.value = true
    const error = authUser as AxiosError
    errorStatus.value = error.response?.status
  }
})
</script>

<style>
/* @import url('@/shared/assets/styles/auth-reg-form.scss'); */

.mt {
  @apply block mt-4;
}

.vee-input {
  @apply h-[50px] w-full;
}
</style>

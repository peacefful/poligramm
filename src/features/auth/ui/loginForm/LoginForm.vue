<template>
  <Form title="authorization" button-title="signIn" :handler-submit="onSubmit">
    <template #labels>
      <VeeInput
        name="login"
        class="vee-input"
        error-name="incorrectesLogin"
        v-model="userData.login"
      />
      <div class="mt">
        <VeeInput
          name="password"
          type="password"
          class="vee-input"
          error-name="incorrectesPassword"
          v-model="userData.password"
        />
      </div>
      <ErrorMessage :isError>
        <div v-if="errorStatus === 404">{{ t('notAccount', 2) }}</div>
        <div v-else>Не правильный логин или пароль</div>
      </ErrorMessage>
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
import { ErrorMessage } from '@/entities/auth'
import { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import * as yup from 'yup'

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
@import url('@/shared/assets/styles/auth-reg-form.scss');
</style>

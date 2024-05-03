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
import { useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import * as yup from 'yup'

const router = useRouter()

const { t } = useI18n({ useScope: 'global' })

const userData: AuthModel.TAuthData = reactive({
  login: '',
  password: ''
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    ...AuthModel.authValidator
  })
})

const onSubmit = handleSubmit(async () => {
  const authUser: AuthModel.TAuthResponse | Error = await ApiAuth.authorization(userData)
  if (!(authUser instanceof Error) && authUser.accessToken) {
    router.push('/chats')
  }
})
</script>

<style>
@import url('@/shared/assets/styles/variables.scss');
</style>

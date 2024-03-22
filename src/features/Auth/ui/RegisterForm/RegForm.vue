<template>
  <Form 
    title="signUp" 
    button-title="signUp" 
    :handler-submit="onSubmit"
  >
    <template #labels>
      <label>
        {{ t('name') }}
        <VeeInput
          name="name"
          class="vee-input"
          error-name="incorrectesLogin"
          v-model="userData.name"
        />
      </label>
      <label class="block mt-4">
        {{ t('surname') }}
        <VeeInput
          name="surname"
          class="vee-input"
          error-name="incorrectesPassword"
          v-model="userData.surname"
        />
      </label>
      <label class="block mt-4">
        {{ t('login') }}
        <VeeInput
          name="login"
          class="vee-input"
          error-name="incorrectesPassword"
          v-model="userData.login"
        />
      </label>
      <label class="block mt-4">
        {{ t('password') }}
        <VeeInput
          name="password"
          class="vee-input"
          type="password"
          error-name="incorrectesPassword"
          v-model="userData.password"
        />
      </label>
      <label class="block mt-4">
        {{ t('phone') }}
        <VeeInput
          name="phone"
          class="vee-input"
          error-name="incorrectesPassword"
          v-model="userData.phone"
        />
      </label>
    </template>
    <template #hint>
      {{ t('hasAccount') }}
      <router-link class="underline" to="/">
        {{ t('signIn', 2) }}
      </router-link>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { Form } from '@/shared/ui/Form'
import { AuthApi, AuthModel } from '@/entities/Auth'
import { useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { type IUser } from '@/shared/types'
import * as yup from 'yup'

const { t } = useI18n({ useScope: 'global' })

const userData: IUser = reactive({
  login: '',
  password: '',
  name: '',
  surname: '',
  phone: ''
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    ...AuthModel.regValidator
  })
})

const onSubmit = handleSubmit(async () => {
  await AuthApi.registration(userData)
})
</script>

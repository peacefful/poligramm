<template>
  <Form title="signUp" button-title="signUp" :handler-submit="onSubmit">
    <template #labels>
      <VeeInput
        name="name"
        class="vee-input"
        error-name="incorrectesName"
        v-model="userData.name"
      />
      <div class="mt">
        <VeeInput
          name="surname"
          class="vee-input"
          error-name="incorrectesSurname"
          v-model="userData.surname"
        />
      </div>
      <div class="mt">
        <VeeInput
          name="login"
          class="vee-input"
          error-name="incorrectesLogin"
          v-model="userData.login"
        />
      </div>
      <div class="mt">
        <VeeInput
          name="password"
          class="vee-input"
          type="password"
          error-name="incorrectesPassword"
          v-model="userData.password"
        />
      </div>
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
import { useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import { ApiAuth, AuthModel } from '@/entities/auth'
import { type TUser } from '@/shared/types'
import { Form } from '@/shared/ui/form'
import { VeeInput } from '@/shared/ui/input'

const router = useRouter()

const { t } = useI18n({ useScope: 'global' })

const userData: TUser = reactive({
  login: '',
  password: '',
  name: '',
  surname: '',
  uuid: ''
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    ...AuthModel.regValidator
  })
})

const onSubmit = handleSubmit(async () => {
  const regUser: TUser | Error = await ApiAuth.registration(userData)
  regUser && router.push('/')
})
</script>

<style>
/* @import url('@/shared/assets/styles/auth-reg-form.scss'); */
</style>

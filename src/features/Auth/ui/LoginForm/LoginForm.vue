<template>
  <Form title="authorization" button-title="signIn" :handler-submit="onSubmit">
    <template #labels>
      <label>
        {{ t('login') }}
        <VeeInput name="login" class="h-[60px] w-full" v-model="userData.login" />
      </label>
      <label class="block mt-4">
        {{ t('password') }}
        <VeeInput
          name="password"
          v-model="userData.password"
          class="h-[60px] w-full"
          type="password"
        />
      </label>
      <div class="mt-2">
        <button>{{ t('forgotPassword') }}?</button>
      </div>
    </template>
    <template #hint>
      {{ t('notAccount') }}
      <router-link class="underline" to="/signup">
        {{ t('signUpText') }}
      </router-link>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { AuthApi, AuthModel } from '@/entities/Auth'
import { Form } from '@/shared/ui/Form'
import { VeeInput } from '@/shared/ui/Input'
import { toTypedSchema } from '@vee-validate/valibot'
import { useForm } from 'vee-validate'
import { object } from 'valibot'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const userData: AuthModel.IAuthData = reactive({
  login: '',
  password: ''
})

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({
      ...AuthModel.validator()
    })
  )
})

const onSubmit = handleSubmit(async () => {
  await AuthApi.authorization(userData)
})
</script>

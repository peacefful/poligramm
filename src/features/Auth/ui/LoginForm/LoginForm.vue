<template>
  <Form
    title="authorization"
    button-title="signIn"
    :handler-submit="onSubmit"
  >
  </Form>
</template>

<script setup lang="ts">
import { AuthApi, type IUserAuthData, authValidator } from '@/entities/Auth'
import { Form } from '@/shared/ui/Form'
import { toTypedSchema } from '@vee-validate/valibot';
import { useForm } from 'vee-validate';
import { reactive } from 'vue'

const authData: IUserAuthData = reactive({
  login: '',
  password: ''
})

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({...authValidator})
  )
})

const onSubmit = handleSubmit(async () => {
  await AuthApi.authorization(authData);
})
</script>

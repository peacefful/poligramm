<template>
  <main class="signin">
    <div class="signin__wrap">
      <form class="signin__form" @submit.prevent="">
        <h1 class="text-5xl">{{ t('authorization') }}</h1>
        <div class="signin__labels">
          <label>
            {{ t('login') }}
            <VeeInput 
            name="login" 
            class="h-[60px] w-full" 
            v-model="userData.login" 
            />
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
        </div>
        <div class="mt-2 flex justify-between">
          <button>{{ t('forgotPassword') }}?</button>
        </div>
        <Button class="mt-7" :title="t('signIn')" />
        <div class="text-center mt-10 opacity-75">
          {{ t('notAccount') }}
          <router-link class="underline" to="/signup">{{ t('signUpText') }}</router-link>
        </div>
      </form>
    </div>
    <div class="hidden sm:block">
      <SwitcherLang class="flex justify-end mr-4" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/Button'
import { VeeInput } from '@/shared/ui/Input/VeeInput'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { authorization } from '@/api/users'
import { useForm, Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { UserModel } from '@/entities/User'
import { string, minLength, object } from 'valibot'
import { SwitcherLang } from '@/features/switcher-lang'

const { t } = useI18n({ useScope: 'global' })

interface IUserData {
  login: string
  password: string
}

const userData: IUserData = reactive({
  login: '',
  password: ''
})

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({...UserModel.authValidator})
  )
})

</script>

<style scoped>
@import './styles.module.scss';
</style>

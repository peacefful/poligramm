<template>
  <Modal class="w-[440px]" @close-modal="$emit('closeAddUser')" :is-open-modal="isOpenAddUser">
    <template v-if="users.length">
      <p class="font-bold text-[20px]">{{ t('selectUser') }}</p>
      <ul>
        <li class="mt-4" v-for="user in users" :key="user.id">
          <div class="flex justify-between">
            {{ user.name }} {{ user.surname }}
            <input type="checkbox" :value="user.uuid" v-model="userUuids" />
          </div>
        </li>
      </ul>
      <Button @click="inviteUsers" class="mt-7 w-full" :is-rounded-lg="true">
        {{ t('add') }}</Button
      >
      <ToastMessage v-if="isError" class="text-center mt-2" type-toast="error">
        {{ t('inviteError') }}
      </ToastMessage>
      <ToastMessage v-if="isSuccess" class="text-center mt-2" type-toast="success">
        {{ t('inviteSuccess') }}
      </ToastMessage>
    </template>
    <template v-else>
      <p class="font-bold text-[20px] text-center">{{t('notUsers')}}</p>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from '@/shared/ui/modal'
import { Button } from '@/shared/ui/button'
import { type TInviteUser } from '@/entities/user'
import { ToastMessage } from '@/entities/auth'
import { SOCKETS } from '@/shared/api'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps<TInviteUser>()

defineEmits(['closeAddUser'])

const userUuids = ref([])

const isError = ref(false)
const isSuccess = ref(false)

const inviteUsers = () => {
  if (userUuids.value.length) {
    userUuids.value.forEach((userUuid) => {
      SOCKETS.emit('personalInvite', userUuid)
      SOCKETS.emit('messageInvite', {
        uuidRoom: props.chat.uuid,
        titleRoom: props.chat.roomName,
        roomId: props.chat.id,
        userUuid
      })
      SOCKETS.emit('personalInvite', storage.getData('uuid'))
    })

    userUuids.value.length = 0
    isSuccess.value = true
  } else {
    isError.value = true
  }
}
</script>

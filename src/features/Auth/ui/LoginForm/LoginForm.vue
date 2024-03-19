<template >
  <Form 
    title="authorization"
    button-title="signIn"
    :handler-submit="UserApi."
  >

  </Form>
</template>

<script setup lang="ts">
import { UserApi } from '@/entities/User';
import { Form } from '@/shared/ui/Form';
</script>
<template>
  <div>
    <h1>Login</h1>
    <amplify-auth-container>
      <amplify-authenticator></amplify-authenticator>
    </amplify-auth-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Login extends Vue {}
</script>
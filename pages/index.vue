<template>
  <div>
    <h1>Home</h1>
    <amplify-sign-out></amplify-sign-out>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {}
</script>

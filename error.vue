<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <button @click="handleError">Return home</button>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>
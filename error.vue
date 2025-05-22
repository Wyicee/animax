<script setup lang="ts">
import block from 'bem-cn-lite';
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError
}>();

const b = block('ax-error');

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <NuxtLayout>
    <div :class="b()">
      <div :class="b('body')">
        <h1 :class="b('body-title')">{{ error.statusCode }}</h1>
        <p :class="b('body-description')">{{ error.message }}</p>
        <button :class="b('body-button')" @click="handleError">Return home</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.ax-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 999;

  &::after {
    content: '';
    background: #00c2bf;
    background: radial-gradient(circle, rgba(0, 194, 191, 1) 0%, rgba(16, 227, 104, 1) 100%);
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 18px;
    height: 100%;

    &-title {
      font-size: 152px;
      line-height: 100%;
    }

    &-description {
      font-size: 32px;
    }

    &-button {
      font-size: 24px;
      padding: 6px 15px;
      border: 1px solid #000;
      border-radius: 6px;
      background: inherit;
      transition-duration: .2s;

      &:hover {
        background: #fff;
        transition-duration: .2s;
      }

      &:active {
        background: rgb(211, 211, 211);
        transition-duration: .2s;
      }
    }
  }
}
</style>
<script setup lang="ts">
import block from 'bem-cn-lite';

defineOptions({
  name: 'AxHeader',
});

const b = block('ax-header');

const route = useRoute();

console.log(route.params.id);
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <input :class="b('body-input')" type="search" placeholder="Поиск...">
    </div>
  </div>
</template>

<style scoped lang="scss">
.ax-header {
  &__body {
    display: flex;
    justify-content: end;

    &-input {
      font-family: 'Open Sans', sans-serif;
      padding: 7px 12px;
      max-width: 250px;
      width: 100%;
      border: 1px solid #000;
      border-radius: 8px;
      background: inherit;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font: inherit;
      }
    }
  }
}
</style>
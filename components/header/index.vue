<script setup lang="ts">
import block from 'bem-cn-lite';
import { ref } from 'vue';
import { fetchSearchAnime } from '~/api/async-await';

defineOptions({
  name: 'AxHeader',
});

const b = block('ax-header');

const searchInput = ref('');
const results = ref([]);
const noResults = ref(false);

const search = async () => {
  try {
    const data = await fetchSearchAnime(searchInput.value);
    results.value = data;
    noResults.value = data.length === 0;
  } catch (error) {
    console.log(error);
    results.value = [];
    noResults.value = true;
  }
};

watch(searchInput, search)
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <form @submit.prevent="search">
        <input
          v-model="searchInput"
          :class="b('body-input')"
          type="search"
          placeholder="Search anime..."
        >
        <button type="submit">Поиск</button>
      </form>
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
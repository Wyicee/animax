<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchSearchAnime } from '~/api/async-await';

defineOptions({
  name: 'AxHeader',
});

const b = block('ax-header');

const searchInput = ref('');
const results = useState('DATA_FROM_HEADER', () => []);

const search = async () => {
  try {
    results.value = await fetchSearchAnime(searchInput.value);
    navigateTo('/results');
  } catch (error) {
    console.log(error);
    results.value = [];
    throw createError({ statusCode: 404, statusMessage: 'Anime not found' });
  }
};
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
          required
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
    padding-bottom: 25px;

    &-input {
      font-family: 'Share Tech', sans-serif;
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
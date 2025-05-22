<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchSearchAnime } from '~/api/async-await';

defineOptions({
  name: 'AxHeader',
});

const b = block('ax-header');

const route = useRoute();

const isHomePage = computed(() => route.path === '/');

const searchInput = ref('');
const results = useState('DATA_FROM_HEADER', () => []);

const search = async () => {
  try {
    const data = await fetchSearchAnime(searchInput.value);
    results.value = data;
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
      <Transition style="flex-grow: 1">
        <div v-show="!isHomePage">
          <NuxtLink :class="b('body-return')" to="/">Home Page</NuxtLink>
        </div>
      </Transition>
      <form :class="b('body-form')" @submit.prevent="search">
        <input
          v-model="searchInput"
          :class="b('body-input')"
          type="search"
          placeholder="Search anime..."
          required
        >
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ax-header {
  &__body {
    display: flex;
    align-items: center;
    justify-content: end;
    padding-bottom: 25px;

    &-return {
      font-size: 20px;
      border-bottom: 2px solid transparent;
      transition-duration: .2s;

      &:hover {
        border-bottom-color: #000;
        transition-duration: .2s;
      }
    }

    &-form {
      display: flex;
      align-items: center;

      button {
        display: flex;
        padding-block: 3px;
        border-block: 2px solid #000;
        border-right: 2px solid #000;
        border-left: none;
        border-radius: 0 8px 8px 0;
        background: inherit;
      }
    }

    &-input {
      padding: 7px 12px;
      max-width: 250px;
      width: 100%;
      border: 2px solid #000;
      border-radius: 8px 0 0 8px;
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

.v-enter-active,
.v-leave-active {
  transition: all .6s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
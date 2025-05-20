<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchAnime, fetchRandomAnime } from '~/api/async-await';
import { computed } from 'vue';

defineOptions({
  name: 'Welcome',
});

const b = block('welcome');

const { data: items, pending } = await useAsyncData(
  'anime',
  () => fetchRandomAnime()
)

const formSynopsis = computed(() => (
  items.value.synopsis === null ? 'No synopsis' : items.value.synopsis
));
</script>

<template>
  <div :class="b()">
    <div v-if="pending">Loading</div>
    <div v-else :class="b('body')">
      <div :class="b('body-names')">
        <h1 v-if="items.title_english === null" :class="b('body-names-default')">{{ items.title }}</h1>
        <h1 v-if="items.title_english !== null" :class="b('body-names-english')">{{ items.title_english }}</h1>
        <h2 :class="b('body-names-original')">{{ items.title_japanese }}</h2>
      </div>
      <div :class="b('body-wrapper')">
        <NuxtImg
          :class="b('body-banner')"
          format="webp,jpg"
          :src=items.images.jpg.image_url
          alt="image title"
        />
        <div :class="b('body-synopsis')">
          <div :class="b('body-synopsis-tag')">Synopsis</div>
          <p :class="b('body-synopsis-text')">{{ formSynopsis }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-wrapper {
      display: flex;
      align-items: start;
      column-gap: 15px;
    }

    &-names {
      padding-top: 20px;

      &-english, &-default {
        font-family: 'Overlock SC', sans-serif;
        font-size: 64px;
        font-weight: 100;
        line-height: 130%;
        letter-spacing: -5%;
      }

      &-original {
        font-family: 'Overlock SC', sans-serif;
        font-size: 21px;
        color: rgba(97, 97, 97, .6);
      }
    }

    &-synopsis {
      display: flex;
      flex-direction: column;
      width: 100%;

      &-tag {
        flex-grow: 1;
        font-family: 'Goblin One', sans-serif;
        padding: 4px;
        border-radius: 8px;
        background-color: rgba(97, 97, 97, 0.3);
      }

      &-text {
        font-family: 'Share Tech', sans-serif;
        font-size: 20px;
        line-height: 150%;
        padding-top: 15px;
      }
    }

    &-banner {
      border-radius: 6px;
      width: 225px;
      height: 320px;
    }
  }
}
</style>
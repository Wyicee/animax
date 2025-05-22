<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchRandomAnime, fetchTopAnime } from '~/api/async-await';
import AxSwiper from '~/components/swiper/index.vue';

defineOptions({
  name: 'AxWelcome',
});

const b = block('welcome');

const { data: items, pending, refresh } = await useAsyncData(
  'anime',
  () => fetchRandomAnime(),
);

const { data: animeTop } = await useAsyncData(
  'topAnime',
  () => fetchTopAnime(),
);

const formSynopsis = computed(() => (
  items.value.synopsis === null ? 'No synopsis' : items.value.synopsis
));

const formName = computed(() => (
  items.value.title_english === null ? items.value.title_japanese : items.value.title_english
));
</script>

<template>
  <div :class="b()">
    <Transition>
      <div v-show="!pending" :class="b('body')">
        <div :class="b('body-names')">
          <h1 :class="b('body-names-default')">{{ formName }}</h1>
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
        <button :class="b('body-random')" @click="refresh()">Random anime</button>
      </div>
    </Transition>
    <div :class="b('main')">
      <AxSwiper :anime-top-list="animeTop" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    position: relative;

    &-wrapper {
      display: flex;
      align-items: start;
      column-gap: 15px;
    }

    &-names {
      &-english, &-default {
        font-family: 'Overlock SC', sans-serif;
        font-size: 64px;
        font-weight: 100;
        line-height: 110%;
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
        font-size: 20px;
        line-height: 150%;
        padding-top: 15px;
        padding-left: 4px;
      }
    }

    &-banner {
      width: 225px;
      height: 320px;
      border: 3px solid #000;
      border-radius: 6px;
    }

    &-random {
      align-self: start;
      padding-block: 6px;
      width: 225px;
      border: 1px solid #000;
      border-radius: 6px;
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
<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchAnimeById } from '~/api/async-await';

const b = block('title-block');

const route = useRoute();
const id:string | string[] = route.params.id;

const { data: anime, error } = await useAsyncData(
  'anime-by-id',
  () => fetchAnimeById(id),
);

useSeoMeta({
  title: anime.value.title_english || anime.value.title_japanese,
  ogTitle: anime.value.title_english || anime.value.title_japanese,
});

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Anime not found' });
}

const formSynopsis = computed(() => (
  anime.value.synopsis === null ? 'No synopsis' : anime.value.synopsis
));

const formName = computed(() => (
  anime.value.title_english === null ? anime.value.title_japanese : anime.value.title_english
));
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <div :class="b('body-names')">
        <h1 :class="b('body-names-default')">{{ formName }}</h1>
        <h2 :class="b('body-names-original')">{{ anime.title_japanese }}</h2>
      </div>
      <div :class="b('body-wrapper')">
        <NuxtImg
          :class="b('body-banner')"
          format="webp,jpg"
          :src=anime.images.jpg.image_url
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
@use 'assets/styles/media' as *;

.title-block {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    position: relative;

    @include tablet {
    }

    &-wrapper {
      display: flex;
      align-items: start;
      column-gap: 15px;

      @include tablet {
        flex-direction: column;
      }
    }

    &-names {
      &-english, &-default {
        font-family: 'Overlock SC', sans-serif;
        font-size: 64px;
        font-weight: 100;
        line-height: 110%;
        letter-spacing: -5%;

        @include tablet {
          font-size: 32px;
        }
      }

      &-original {
        font-family: 'Overlock SC', sans-serif;
        font-size: 21px;
        color: rgba(97, 97, 97, .6);

        @include tablet {
          font-size: 18px;
        }
      }
    }

    &-synopsis {
      display: flex;
      flex-direction: column;
      width: 100%;

      @include tablet {
        padding-top: 10px;
      }

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

        @include tablet {
          font-size: 16px;
        }
      }
    }

    &-banner {
      width: 225px;
      height: 320px;
      border: 3px solid #000;
      border-radius: 6px;

      @include mobile-s {
        width: 190px;
        height: 270px;
      }
    }
  }
}
</style>
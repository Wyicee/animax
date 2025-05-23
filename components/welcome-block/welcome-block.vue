<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchRandomAnime } from '~/api/async-await';

const b = block('welcome-block');

const { data: items, pending, refresh } = await useAsyncData(
  'anime',
  () => fetchRandomAnime(),
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
          <Transition>
            <NuxtImg
              :class="b('body-banner')"
              :src=items.images.jpg.image_url
              :alt="items.title_english || items.title_japanese"
              width="225"
              height="320"
              format="webp"
            />
          </Transition>
          <div :class="b('body-synopsis')">
            <div :class="b('body-synopsis-tag')">Synopsis</div>
            <p :class="b('body-synopsis-text')">{{ formSynopsis }}</p>
          </div>
        </div>
        <button :class="b('body-random')" @click="refresh()">Random anime</button>
      </div>
    </Transition>
    <div :class="b('main')">
      <top-rated-anime />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media' as *;

.welcome-block {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    min-height: 500px;
    position: relative;

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
  transition: all .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
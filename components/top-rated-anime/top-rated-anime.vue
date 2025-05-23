<script setup lang="ts">
import block from 'bem-cn-lite';
import { fetchTopAnime } from '~/api/async-await';
import { SwiperSlide } from 'swiper/vue';

const b = block('top-rated-anime');

const { data: animeTop } = await useAsyncData(
  'topAnime',
  () => fetchTopAnime(),
);
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <h3 :class="b('body-title')">Top rated anime</h3>
      <ax-swiper>
        <swiper-slide v-for="item in animeTop" :key="item.mal_id">
          <NuxtLink :to="`/animes/${item.mal_id}`">
            <figure :class="b('body-figure')">
              <NuxtImg
                format="webp"
                :src=item.images.jpg.image_url
                :alt="item.title_english || item.title_japanese"
              />
              <figcaption v-text="item.title_english || item.title_japanese" />
            </figure>
          </NuxtLink>
        </swiper-slide>
      </ax-swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '/assets/styles/media' as *;

.top-rated-anime {
  &__body {
    &-title {
      font-family: 'Overlock SC', sans-serif;
      font-size: 42px;
      padding-top: 35px;

      @include mobile {
        font-size: 26px;
        padding-top: 25px;
      }
    }

    &-figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition-duration: .2s;


      &:hover {
        img {
          box-shadow: 0 8px 20px rgba(0, 0, 0, .6);
          transition-duration: .15s;
        }

        figcaption {
          border-bottom-color: #000;
          transition-duration: .15s;
        }
      }

      figcaption {
        font-size: 20px;
        text-wrap: pretty;
        border-bottom: 2px solid transparent;
      }

      img {
        height: 305px;
        width: 205px;
        border: 3px solid #000;
        border-radius: 6px;
      }
    }
  }
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

defineOptions({
  name: 'AxSwiper',
});

defineProps<{
  animeTopList: object
}>();

const modules = [ Autoplay, Navigation, Pagination ];

const swiperSettings = reactive({
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    1023.98: {
      slidesPerView: 5,
    },
  },
});
</script>

<template>
  <div v-if="animeTopList.length === 0">No Data!</div>
  <Swiper v-else v-bind="swiperSettings" :modules="modules" navigation>
    <SwiperSlide v-for="item in animeTopList" :key="item.mal_id">
      <NuxtLink :to="`/animes/${item.mal_id}`">
        <figure class="swiper-figure">
          <NuxtImg format="webp" :src=item.images.jpg.image_url :alt="item.title_english" />
          <figcaption v-if="item.title_english === null">{{ item.title_japanese }}</figcaption>
          <figcaption v-else>{{ item.title_english }}</figcaption>
        </figure>
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.swiper {
  padding-top: 25px;

  &-wrapper {
    display: flex;
  }

  &-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

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
      transition-duration: .15s;
    }

    img {
      height: 305px;
      width: 205px;
      border: 3px solid #000;
      border-radius: 6px;
    }
  }

  &-button {
    &-next {
      position: absolute;
    }

    &-prev {}
  }
}
</style>
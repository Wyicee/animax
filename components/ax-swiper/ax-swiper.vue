<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

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
  <Swiper v-bind="swiperSettings" :modules="modules" navigation>
    <slot />
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
}
</style>
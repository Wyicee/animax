<script setup lang="ts">
import block from 'bem-cn-lite';

const b = block('results');

const searchResults = useState('DATA_FROM_HEADER');
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <div v-if="searchResults.length === 0" :class="b('body-invalid')">No data</div>
      <TransitionGroup :class="b('body-list')" tag="ul" mode="out-in" move-class="list-mode">
        <li v-for="item in searchResults" :key="item.mal_id" :class="b('body-list-item')">
          <NuxtLink :class="b('body-list-item-link')" :to="`/animes/${item.mal_id}`">
            <figure :class="b('body-list-item-figure')">
              <NuxtImg
                format="webp,jpg"
                :src=item.images.jpg.image_url
              />
              <figcaption>{{ item.title_english || item.title_english }}</figcaption>
            </figure>
          </NuxtLink>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media' as *;

.results {
  &__body {
    display: flex;
    align-items: center;
    justify-content: center;

    &-invalid {
      font-size: 102px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @include mobile-s {
        font-size: 41px;
      }
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      max-height: 755px;
      border-radius: 15px;
      background-color: rgba(136, 136, 136, 0.2);
      box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.4);
      overflow-y: scroll;

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 20px;

        @include tablet {
          padding: 10px 8px;
        }

        &-figure {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

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
            border: 3px solid #000;
            border-radius: 6px;
            width: 230px;
            height: 320px;
            transition-duration: .15s;


            @include mobile {
              width: 180px;
              height: 200px;
            }
          }
        }
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform .5s ease;
}

</style>
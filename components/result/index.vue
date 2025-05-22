<script setup lang="ts">
import block from 'bem-cn-lite';

defineOptions({
  name: 'AxResult',
});

const b = block('results');

const searchResults = useState('DATA_FROM_HEADER');
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <div v-if="searchResults.length === 0" :class="b('body-invalid')">Search something</div>
      <ul v-else :class="b('body-list')">
        <li v-for="item in searchResults" :key="item.mal_id" :class="b('body-list-item')">
          <NuxtLink :class="b('body-list-item-link')" :to="`/animes/${item.mal_id}`">
            <figure :class="b('body-list-item-figure')">
              <figcaption>{{ item.title_english }}</figcaption>
              <NuxtImg
                format="webp,jpg"
                :src=item.images.jpg.image_url
              />
            </figure>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.results {
  &__body {
    display: flex;
    align-items: center;
    justify-content: center;

    &-invalid {
      font-size: 102px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 755px;
      border-radius: 15px;
      background-color: rgba(136, 136, 136, 0.2);
      box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.4);
      overflow-y: scroll;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 20px;

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
            transition-duration: .15s;
          }
        }
      }
    }
  }
}
</style>
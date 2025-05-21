<script setup lang="ts">
import block from 'bem-cn-lite'

defineOptions({
  name: 'AxResult'
})

const b = block('results')

const searchResults = useState('DATA_FROM_HEADER')
</script>

<template>
  <div :class="b()">
    <div :class="b('body')">
      <ul :class="b('body-list')">
        <li v-for="item in searchResults" :key="item.mal_id" :class="b('body-list-item')">
          <NuxtLink :to="`/animes/${item.mal_id}`">
            <figure :class="b('body-list-item-figure')">
              <p>{{ item.title }}</p>
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

    &-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 740px;
      overflow-y: scroll;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;

        &-figure {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          p {
            font-family: 'Share Tech', sans-serif;
            font-size: 20px;
          }

          img {
            border: 3px solid #000;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>
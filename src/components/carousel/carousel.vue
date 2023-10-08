<template>
  <Carousel :breakpoints="breakpoints" :autoplay="autoplay" :wrapAround="true" :transition="300" class="w-full">
    <Slide v-for="(image, index) in images" :key="`${image.alt}-${index}`">
      <div v-if="!image.url" class="overflow-hidden" :class="image.class || 'h-40'">
        <img :src="image.path" :alt="image.alt" class="h-full w-full object-cover">
      </div>
      <SliderCard
        v-else
        :image="image.path"
        :url="image.url"
        :name="image.alt"
      />
    </Slide>
    <template #addons>
      <Navigation v-if="navigation" />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SliderCard from './slider-card.vue'


export interface Images {
  path: any
  alt: string
  description?: string
  class?: string
  url?: string
}

export interface CarouselProps {
  images: Images[],
  viewportHeigth?: string,
  numberOfImagesPerPage?: number,
  autoplay?: number,
  breakpoints?: any,
  navigation?: boolean
}

export type sizes = "sm" | "md" | "lg" | "xl" |"2xl"

const props = withDefaults(defineProps<CarouselProps>(),{
  viewportHeigth: '400px',
  numberOfImagesPerPage: 1.5,
  autoplay: 0,
  breakpoints: {
    640: {
      itemsToShow: 1,
    },
    1024: {
      itemsToShow: 3,
    },
    1280: {
      itemsToShow: 5,
    }
  },
  navigation: true
})
</script>

<style>
.carousel__next, .carousel__prev  {
  background: rgba(255,255,255, 0.9) !important;
  border-radius: 9999px !important;
}

.carousel__pagination-button--active::after {
  background: rgba(183, 112, 161, 0.9) !important;
}

/* .carousel__viewport {
  height: v-bind(viewportHeigth);
} */

</style>

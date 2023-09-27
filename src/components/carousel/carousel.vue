<template>
  <Carousel :items-to-show="1.5" :autoplay="4000" :wrapAround="true" :transition="300">
    <Slide v-for="image in images" :key="image.alt">
      <div :style="{height: '250px', width: '90%'}">
        <img :src="image.path" :alt="image.alt">
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export interface Images {
  path: any
  alt: string
  description: string
}
export interface CarouselProps {
  images: Images[]
}
const props = defineProps<CarouselProps>()
</script>

<style>
.carousel__next, .carousel__prev  {
  background: rgba(255,255,255, 0.9) !important;
  border-radius: 9999px !important;
}
</style>

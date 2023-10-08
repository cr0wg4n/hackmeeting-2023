<template>
  <div class="flex flex-col justify-center items-center h-52">
    <img :src="image" :alt="name" class="h-full">
    <a 
      class="slider-card__link"
      :href="url"
      target="_blank"
      rel="noopener"
    >
      Visitar Web
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Hats } from '~/types'

interface SlideCardProps {
  name: string
  image: string
  url?: string,
  hat?: Hats
}

const props = defineProps<SlideCardProps>()
</script>

<style scoped>
.slider-card__link {
  @apply text-center text-center border-2 border-primary rounded-2xl m-4 w-40 text-sm;
  @apply hover:cursor-pointer hover:bg-primary text-white;
}
</style>
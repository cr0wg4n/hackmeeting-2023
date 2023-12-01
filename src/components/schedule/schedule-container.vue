<script setup lang="ts">
import { ref} from 'vue'
import SocialNetwork from './social-network.vue'
import type { HMContributor } from '~/types';

const props = defineProps<{
  speakers: HMContributor[],
  headers: [string, string, string]
}>()

const itemsToShow = ref(new Set())
const showDetails = (id: number) => {
  if(itemsToShow.value.has(id)) {
    itemsToShow.value.delete(id)
  } else {
    itemsToShow.value.add(id)
  }
}
const getHour = (date: Date | string) => {
  if (typeof date === 'string') {
    return date
  }
  return date.toString().slice(16,21)
}
</script>

<template>
  <table class="hm-table animate-opacity-announcement">
    <thead>
      <tr class="hm-table__title">
        <th>{{ headers[0] }}</th>
        <th>{{ headers[1] }}</th>
        <th>{{ headers[2] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="speaker, index in speakers" class="relative">
        <td class="text-xs relative">
          <SocialNetwork :socialNetworks="speaker.socialNetworks" class="absolute z-10 md:left-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
          <div class="flex flex-col pl-2 md:pl-0">
            <div class="flex justify-center p-2 relative">
              <img :src="speaker.imageSrc" class="hm-table__image rounded-full">
              <div v-if="speaker.keynote" class="absolute bottom-0">
                <span class="text-xs bg-primary px-2 rounded-lg font-semibold">
                  Keynote
                </span>
              </div>
            </div>
            <div class="text-center text-xxs mt-1 w-full">
              {{ speaker.name}}
            </div>
          </div>
        </td>
        <td class="text-xs max-w-xs">
          <div class="text-xs font-semibold text-center" :class="{'text-secondary': speaker.special}">{{ speaker.talkName }}</div>
          <div 
            v-if="speaker.detail"
            class="text-center text-primary hover:cursor-pointer active:scale-105 select-none py-2 text-xxs"
            @click="showDetails(index)"
          >
            {{ !itemsToShow.has(index) ? '[Más Detalle]':'[Menos Detalle]' }}
          </div>
          <div v-if="itemsToShow.has(index)" class="text-xs opacity-80">
            {{ speaker.detail }}
          </div>
        </td>
        <td class="text-xxs text-center">
          <span class="font-semibold">{{ getHour(speaker.time.start) }}</span> a 
          <span class="font-semibold">{{ getHour(speaker.time.end) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.hm-table {
  width: 100%;
}
tr {
  @apply border-primary;
  border-width: 2px;
}
th, td {
  @apply p-4;
}
.hm-table__title {
  @apply text-secondary;
}
.hm-table__image {
  max-width: 70px !important;
  min-width: 70px !important;
}
</style>
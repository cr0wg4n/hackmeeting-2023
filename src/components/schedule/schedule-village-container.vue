<script setup lang="ts">
import type { Village } from '~/types';
import SocialNetwork from './social-network.vue';

const props = defineProps<{
  villages: Village[],
  headers: [string, string, string]
}>()

const getHour = (date: Date | string) => {
  if (typeof date === 'string') {
    return date
  }
  return date.toString().slice(16,21)
}
</script>

<template>
  <table class="hm-table">
    <thead>
      <tr class="hm-table__title">
        <th>{{ headers[0] }}</th>
        <th>{{ headers[1] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ name, groups }, index in villages" class="relative" :key="index">
        <td class="text-xs relative">
          <div class="text-center text-xs">
            {{ name }}
          </div>
        </td>
        <td class="text-xs" v-if="groups?.length">
          <div class="flex flex-col justify-center my-2" v-for="group, index in groups" :key="index">
            <div class="flex flex-row items-center gap-2">
              <a :href="group.url" rel="noopener" target="_blank">
                <img :src="group.logo" :alt="group.name" class="hm-table__image rounded-full hover:scale-105 hover:cursor-pointer">
              </a>
              <div class="flex flex-col text-xxs gap-2">
                <div>
                  {{ group.name }}
                </div>
                <div>
                  <SocialNetwork :socialNetworks="group.socialNetworks"  :vertical="false"/>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td v-else class="text-center">
          -
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
  max-width: 60px !important;
  min-width: 60px !important;
}
</style>
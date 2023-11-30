<template>
  <div v-if="socialNetworks?.length" class="flex gap-2" :class="vertical?'flex-col':'flex-row'">
    <a v-for="{ type: icon, url } in socialNetworks" 
      :key="icon" 
      :href="url"
      target="_blank"
      rel="noopener"
      class="bg-secondary rounded-full h-5 w-5 flex justify-center items-center hover:scale-110"
      :title="url"
    >
      <span :class="icon" class="bg-neutral"/>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { SocialNetwork } from '~/types';

const props = withDefaults(defineProps<{
  socialNetworks?: SocialNetwork[],
  vertical?: boolean
}>(), {
  vertical: true,
  socialNetworks: () => []
})
</script>

<style scoped>

</style>
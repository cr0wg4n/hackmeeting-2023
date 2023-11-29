<template>
  <div class="text-center flex flex-col mt-12 mb-8">
    <div class="gradient-text-yellow font-strong text-3xl" :title="hoverTitle || title">
      &lt; {{ title }} /&gt;
    </div>
    <div v-if="subtitle" class="text-sm font-light">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  hoverTitle?: string,
  subtitle?: string
}>()
</script>

<style scoped>

</style>
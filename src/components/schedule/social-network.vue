<template>
  <div class="flex flex-col gap-1">
    <a v-for="{ icon, url } in icons" 
      :key="icon" 
      :href="url"
      class="bg-secondary rounded-full h-5 w-5 flex justify-center items-center hover:scale-110"
    >
      <span :class="icon" class="bg-neutral"/>
    </a>
  </div>
</template>

<script setup lang="ts">
const icons = [
  {
    icon: 'icon-[mdi--github] text-xs',
    url: ''
  },
  {
    icon: 'icon-[mdi--web] text-xs',
    url: ''
  },
  {
    icon: 'icon-[mdi--instagram] text-xs',
    url: ''
  }
]
</script>

<style scoped>

</style>
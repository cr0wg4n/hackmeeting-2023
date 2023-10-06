<template>
  <div class="text-center">
    <div>
      <span class="time-value">
        {{ days }} 
      </span>
      <span class="time-description">
        días 
      </span>
      <span class="time-value">
        {{ hours }}
      </span>
      <span class="time-description">
        hrs
      </span>
      <span class="time-value">
        {{ minutes }}
      </span>
      <span class="time-description">
        min
      </span>
      <span class="time-value">
        {{ seconds }}
      </span>
      <span class="time-description">
        seg
      </span>
    </div>
    <div class="text-secondary text-xl md:text-2xl font-strong">
      02 de Diciembre del 2023
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
const hackmeetingDate = new Date("Dec 2, 2023 08:00:00").getTime()
const interval = ref()

onMounted(() => {
  interval.value = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime()
    // Zero Pad
    const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')

    // Find the distance between now and the count down date
    const distance = hackmeetingDate - now
    // Time calculations for days, hours, minutes and seconds
    const _days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const _hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const _minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const _seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
    days.value = _days.toString()
    hours.value = (zeroPad(_hours,2))
    minutes.value = (zeroPad(_minutes,2))
    seconds.value = (zeroPad(_seconds,2))

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(interval.value)
      days.value = '00'
      hours.value = '00'
      minutes.value = '00'
      seconds.value = '00'
      console.log('terminó el conteo')
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval.value)
})
</script>

<style scoped>
.time-description {
  @apply text-xs md:text-base text-primary font-sans;
}
.time-value {
  @apply text-2xl md:text-4xl font-strong;
} 
</style>

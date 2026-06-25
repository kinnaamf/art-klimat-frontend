<script setup lang="ts">

import IconChevron from "@/components/icons/IconChevron.vue";

import { ref, computed } from "vue";

const current = ref(0)

const slides = [
  { main: '/images/production-slider/slide-1.png', alt: 'Вентиляционная система в производственном помещении' },
  { main: '/images/production-slider/slide-2.png', alt: 'Монтаж климатического оборудования' },
  { main: '/images/production-slider/slide-3.png', alt: 'Промышленная вентиляция' },
]

const nextIndex = computed(() => (current.value + 1) % slides.length)

const next = () => {
  current.value = nextIndex.value
}

const prev = () => {
  current.value = (current.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <div class="relative w-full flex gap-6">
    <div class="relative rounded-2xl overflow-hidden">
      <img
          :key="current"
          :src="slides[current].main"
          :alt="slides[current].alt"
          class="w-[650px] h-[365px] object-cover"
      >


      <div class="absolute bottom-12 left-12 flex gap-3">
        <div
            class="bg-white h-16 w-16 flex items-center justify-center rounded-full cursor-pointer"
            @click="prev">
          <IconChevron/>
        </div>
        <div
            class="bg-white h-16 w-16 flex items-center justify-center rounded-full rotate-180 cursor-pointer"
            @click="next">
          <IconChevron/>
        </div>
      </div>
    </div>
    <div>
      <div>
        <img
            :src="slides[nextIndex].main"
            :alt="slides[nextIndex].alt"
            class="w-[185px] h-[185px] object-cover rounded-2xl"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
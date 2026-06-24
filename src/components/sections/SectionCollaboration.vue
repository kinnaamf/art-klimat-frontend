<script setup lang="ts">
import { useSlider } from "@/composables/useSlider.ts";

const {
  sliderData,
  sliderRef,
  startDragging,
  drag,
  stopDragging,
} = useSlider()
</script>

<template>
  <section>
    <h2 class="text-[4rem] leading-[72px] text-darkgray font-medium">
      Наши <span class="text-orange">Преимущества</span>
    </h2>

    <div class="mt-12">
      <div
          ref="sliderRef"
          @mousedown="startDragging"
          @mousemove="drag"
          @mouseup="stopDragging"
          @mouseleave="stopDragging"
          class="flex gap-4 w-screen overflow-x-auto scrollbar-none select-none cursor-grab active:cursor-grabbing">
        <div v-for="slide in sliderData" class="bg-white w-[375px] h-[500px] flex flex-col shrink-0 rounded-2xl">
          <div class="px-16 pt-16 pb-8">
            <component :is="slide.icon"/>
          </div>

          <div class="flex flex-col gap-2 p-8">
            <h3 class="text-darkgray font-medium leading-[28px] tracking-[-0.1px] text-xl">{{ slide.title }}</h3>
            <p class="text-black/60 text-[14px] leading-[20px]">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
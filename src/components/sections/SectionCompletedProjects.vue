<script setup lang="ts">
  import CompletedProjectsList from "@/components/sections/CompletedProjectsList.vue";
  import { useProjects } from "@/composables/useProjects.ts";

  const { completedProjects } = useProjects()
</script>

<template>
  <section class="bg-white flex flex-col gap-12">
    <div>
      <h2 class="mb-4  text-[#1f1e1e] font-medium text-[4rem] leading-[72px]">
        Реализованные <span class="text-orange">объекты</span>
      </h2>
      <p class="text-xl text-darkgray/60 -tracking-wide leading-7">Мы предлагаем качественные и надежные вентиляционные<br>изделия по доступным ценам</p>
    </div>

    <CompletedProjectsList :completedProjects="completedProjects" />

    <div class="flex justify-center">
      <button class="cursor-pointer text-white px-6 py-[18px] font-medium text-[20px] bg-orange rounded-2xl">
        Посмотреть всё
      </button>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
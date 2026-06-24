<script setup lang="ts">

import AppHeader from "@/components/AppHeader.vue";
import RequestButton from "@/components/RequestButton.vue";
</script>

<template>
  <div class="relative h-[810px]">
    <div class="hero absolute h-full w-full bg-no-repeat -z-10"></div>

    <div class="flex justify-center pt-6">
      <AppHeader/>
    </div>

    <div class="absolute bottom-16 left-16 text-white flex flex-col gap-8">
      <div class="flex flex-col gap-6">
        <h1 class="font-medium text-[4rem] leading-[72px]">
          Полный цикл вентиляции<br>с собственным производством
        </h1>
        <p class="text-white/70 text-xl -leading-[0.1px]">
          Лидер услуг от проекта до пусконаладки воздуховодов и фасонных изделий для инжиниринга<br>и строительства
        </p>
      </div>
      <div class="flex gap-4">
        <RequestButton/>

        <button class="px-6 py-[18px] font-medium bg-white/10 rounded-2xl">
          Оставить заявку
        </button>
      </div>
    </div>
  </div>
</template>

как разместить нижний блок слева снизу
<style scoped lang="postcss">
@reference "../../assets/main.css";

.hero {
  background-image: url("/images/Hero.png");
}
</style>
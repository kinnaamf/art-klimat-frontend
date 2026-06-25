<script setup lang="ts">

import IconChevron from "@/components/icons/IconChevron.vue";
import ProductionSlider from "@/components/sections/ProductionSlider.vue";
</script>

<template>
  <section class="border-t border-black/10 text-darkgray">
    <div class="pt-20 flex justify-between gap-6 items-start">
      <div class="flex items-center gap-2.5 w-[430px] shrink-0">
        <div class="h-2.5 w-2.5 rounded-full bg-orange circle"></div>
        <span class="text-xl font-normal leading-7 -tracking-wide text-black/50">О компании</span>
      </div>
      <div class="flex flex-col gap-12">
        <h2 class="text-[4rem] font-medium leading-[72px]">Производство</h2>

        <h3 class="text-5xl font-medium">Наша компания предоставляет широкий ассортимент вентиляционных изделий, которые отличаются высоким качеством
            и надёжностью. Вы можете выбрать из различных <span class="text-darkgray/40">моделей и размеров, подходящих для любых помещений и условий
            эксплуатации</span></h3>

        <div class="text-[80px]  flex justify-between">
          <div>
            <h3 class="text-orange font-medium">850 000 м<sup>2</sup></h3>
            <h5 class="text-xl text-darkgray/60 leading-7 -tracking-wide">Произвели воздуховодов</h5>
          </div>
          <div>
            <h3 class="text-orange font-medium">1 800 400</h3>
            <h5 class="text-xl text-darkgray/60 leading-7 -tracking-wide">Произвели деталей</h5>
          </div>
        </div>

        <h4 class="text-[2rem] leading-[40px] font-medium text-darkgray/40">Мы гарантируем, что каждая продукция соответствует строгим стандартам и прослужит долго. При этом наши цены
            остаются доступными для всех клиентов. Вы можете выбрать из различных моделей и размеров, подходящих
            для любых помещений и условий эксплуатации
        </h4>

        <div class="">
          <ProductionSlider/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.circle {
  box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.60) inset;
}
</style>
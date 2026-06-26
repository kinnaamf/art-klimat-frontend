<script setup lang="ts">
const collaborationList = [
  {
    title: 'Строительные компании',
    count: 85,
    description: 'Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам',
  },
  {
    title: 'Инжиниринговые компании',
    count: 47,
    description: 'Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам',
  },
  {
    title: 'Монтажные организации',
    count: 65,
    description: 'Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам',
  },

]
</script>

<template>
<section>
  <h2 class="text-[4rem] leading-[72px] text-darkgray font-medium">
    Сферы для <span class="text-orange">сотрудничества</span>
  </h2>


  <div class="mt-12 flex flex-col divide-y divide- divide-darkgray/10 py-10">
    <div class="h-[0.1px] bg-darkgray/5"></div>
    <div v-for="item in collaborationList" class="flex justify-between gap-8 py-10">
      <div class="flex items-start gap-4">
        <span class="text-[3rem] font-medium leading-14 text-darkgray w-min text-nowrap">
          {{ item.title }}
        </span>
        <span class="text-darkgray/60 text-base font-normal leading-6 pb-3">
          {{ item.count }} проектов
        </span>
      </div>
      <div class="w-[480px]">
        <h4 class="text-xl text-darkgray/60 -tracking-wide leading-7">{{ item.description }}</h4>
      </div>
    </div>
    <div class="h-[0.1px] bg-darkgray/5"></div>

  </div>
</section>
</template>

<style scoped lang="postcss">

</style>
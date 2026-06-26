<script setup lang="ts">
const data = [
  {
    title: 'Лет на рынке',
    count: 20
  },
  {
    title: 'Реализованных проектов',
    count: 800
  },
  {
    title: 'Сотрудников вштате',
    count: 43
  },
  {
    title: 'Отзывов килентов',
    count: 321
  },
]
</script>

<template>
  <section>
    <div class="flex gap-6 text-darkgray">
      <img src="/images/production-slider/slide-1.png" alt="" class="rounded-2xl aspect-video object-cover w-full h-[600px]" />
      <img src="/images/production-slider/slide-2.png" alt="" class="rounded-2xl aspect-square object-cover h-[240px]">
    </div>

    <div class="mt-24 w-[60%] mx-auto flex flex-col gap-12">
      <h2 class="text-5xl font-medium leading-[56px]">Мы предлагаем качественные и надёжные вентиляционные изделия по доступным ценам</h2>

      <div class="flex justify-between gap-16 text-xl -tracking-wide font-normal leading-7">
        <div class="flex flex-col gap-6">
          <span>Также мы гарантируем качественное исполнение заказов в самые минимальные сроки</span>
          <span>Если у вас имеются какие‑либо вопросы или пожелания, не стесняйтесь обращаться к нашим менеджерам</span>
        </div>
        <div>
          <span>Они предоставят вам необходимую помощь и проконсультируют по любым вопросам, связанным с вентиляционной техникой</span>
        </div>
      </div>

      <div class="flex items-start content-start gap-12 self-stretch flex-wrap">
        <div v-for="item in data">
          <div class="flex flex-col gap-4">
            <span class="text-[80px] text-orange font-medium leading-[88px]">{{ item.count }}</span>
            <span class="text-xl -tracking-wide leading-7 text-darkgray/60">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
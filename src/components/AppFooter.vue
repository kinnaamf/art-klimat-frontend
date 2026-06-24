<script setup lang="ts">

import FooterColumn from "@/components/FooterColumn.vue";

const services = [
  { label: 'Проектирование', to: '/' },
  { label: 'Производство', to: '/' },
  { label: 'Монтаж', to: '/' },
  { label: 'Пусконаладка', to: '/' },
]

const products = [
  { label: 'Воздуховоды', to: '/' },
  { label: 'Круглые фасонные части', to: '/' },
  { label: 'Прямоугольные фасонные части', to: '/' },
  { label: 'Элементы систем вентиляции', to: '/' },
  { label: 'Нестандартные изделия', to: '/' },
]

const menu = [
  { label: 'Производство', to: '/' },
  { label: 'Объекты', to: '/' },
  { label: 'О компании', to: '/' },
  { label: 'Контакты', to: '/' },
]
</script>

<template>
  <footer class="bg-darkgray px-16 pt-16 pb-12 text-white">
    <div class=" flex gap-12">
      <div class="w-[480px] shrink-0">
        <div class="flex items-center gap-6">
          <img src="/logo.svg" alt="" class="w-[56px] h-[56px]"/>
          <h2 class="font-medium text-[28px] leading-8">Арт-Климат</h2>
        </div>
        <div>
          <div class="grid grid-cols-2 font-medium text-base mt-10 gap-x-8 gap-y-4">
            <div><span>Telegram</span></div>
            <div><span>WhatsApp</span></div>
            <div><span>+7 967 533-67-77</span></div>
            <div><span>info@ventzakaz.ru</span></div>
          </div>
        </div>
        <div class="mt-6">
          <h5 class="text-sm font-normal leading-[24px] text-white/60">Где мы находимся</h5>
          <h4 class="text-base font-medium leading-[28px] tracking-[-0.1px] mt-px">
            Ленинградская область, посёлок Бугры,<br> улица Шоссейная, 33б литера А, помещение 21, 22
          </h4>
          <h5 class="text-sm font-normal leading-[24px] text-white/60 mt-6">
            Пн - пт: 09:00 - 19:00 • Сб, вс - выходные дни</h5>
        </div>
      </div>

      <div class="flex gap-24">
        <FooterColumn title="Услуги" :links="services"/>
        <FooterColumn title="Продукция" :links="products"/>
        <FooterColumn title="Меню" :links="menu"/>
      </div>
    </div>

    <div class="h-px bg-white/10 w-full my-12"></div>

    <div class="text-base text-white/60 flex justify-between">
      <a href="">Политика конфиденциальности</a>
      <h3>© 2026 «Арт-Климат». Все права защищены</h3>
      <h3>UX/UI дизайн от UxPRO</h3>
    </div>
  </footer>
</template>

<style scoped lang="postcss">

</style>
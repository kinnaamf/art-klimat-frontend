<template>
  <section>
    <h2 class="mb-12 text-[#1f1e1e] font-medium text-[4rem] leading-[72px]">
      Полный цикл <span class="text-orange">услуг</span>
    </h2>

    <div class="flex flex-col items-start gap-6 self-stretch">
      <ServiceRow :cards="rowOne" class="grid-one" />
      <ServiceRow :cards="rowTwo" class="grid-two" />
    </div>

    <div class="flex justify-between mt-6 gap-6">
      <ServiceForm/>
      <ServiceContacts class="flex-1"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceRow from "@/components/sections/ServiceRow.vue";
import ServiceForm from "@/components/sections/ServiceForm.vue";
import ServiceContacts from "@/components/sections/ServiceContacts.vue";

const rowOne = [
  { title: 'Проектирование', type: 'planning' },
  { title: 'Производство', type: 'production' },
]

const rowTwo = [
  { title: 'Монтаж', type: 'montage' },
  { title: 'Пусконаладка', type: 'commissioning' },
]
</script>

<style scoped>
.grid-one {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.50fr);
  grid-template-rows: repeat(1, fit-content(100%));
}

.grid-two {
  grid-template-columns: minmax(0, 1.50fr) minmax(0, 1fr);
  grid-template-rows: repeat(1, fit-content(100%));
}
</style>
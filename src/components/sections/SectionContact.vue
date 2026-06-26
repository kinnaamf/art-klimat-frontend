<script setup lang="ts">

import ServiceForm from "@/components/sections/ServiceForm.vue";
import ContactForm from "@/components/sections/ContactForm.vue";
</script>

<template>
  <section class="inline-flex text-darkgray border-t border-t-darkgray/10">
    <div class="w-1/2">
      <h2 class="text-[4rem] font-medium leading-[72px]">Оставьте заявку, чтобы обсудить проект</h2>
      <p class="mt-6 text-xl -tracking-wide leading-7 text-darkgray/60">Проконсультируем, подберём оборудование, <br>рассчитаем стоимость проекта</p>
    </div>
    <div class="w-1/2">
      <ContactForm/>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
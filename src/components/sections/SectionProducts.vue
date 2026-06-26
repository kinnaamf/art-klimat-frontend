<script setup lang="ts">
  import { useProducts } from "@/composables/useProducts.ts";
  import ProductsList from "@/components/sections/ProductsList.vue";

  const { products } = useProducts()
</script>

<template>
  <section class="bg-white flex flex-col gap-12">
    <h2 class="mb-4  text-[#1f1e1e] font-medium text-[4rem] leading-[72px]">
      Наша <span class="text-orange">продукция</span>
    </h2>
    <p class="text-xl text-darkgray/60 -tracking-wide leading-7">Мы предлагаем качественные и надежные вентиляционные<br>изделия по доступным ценам</p>

    <ProductsList :products="products"></ProductsList>

    <div class="flex justify-center">
      <button class="cursor-pointer text-white px-6 py-[18px] font-medium text-[20px] bg-orange rounded-2xl">
        Посмотреть всё
      </button>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
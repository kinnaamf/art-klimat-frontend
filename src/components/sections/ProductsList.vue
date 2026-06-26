<script setup lang="ts">
import ProductsItem from "@/components/sections/ProductsItem.vue";

defineProps<{
  products: { id: number; name: string; count: number; priceFrom: number; image: string }[];
}>()
</script>

<template>
  <div class="grid grid-cols-5 gap-4 self-stretch">
    <div
        v-for="product in products"
        :key="product.id"
        class=""
    >
      <ProductsItem :product="product" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
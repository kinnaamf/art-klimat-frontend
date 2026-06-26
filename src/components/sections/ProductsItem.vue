<script setup lang="ts">
defineProps<{
  product: { id: number; name: string; count: number; priceFrom: number; image: string };
}>()
</script>

<template>
  <div>
    <img :src="product.image" alt="" class="h-[330px] w-[250px] rounded-2xl">

    <div class="flex mt-2 gap-1 flex-col p-2">
      <h3 class="text-xl font-medium leading-7 -tracking-wide text-darkgray whitespace-pre-line">{{ product.name }}</h3>
      <span class="text-base font-normal leading-6 text-darkgray/60">{{ product.count }} позиций, от {{ product.priceFrom }} ₽</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
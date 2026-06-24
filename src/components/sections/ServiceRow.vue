<script setup lang="ts">

import ServiceCard from "@/components/sections/ServiceCard.vue";

defineProps<{
  cards: { title: string; type: string }[];
}>()
</script>

<template>
  <div class="gap-6 inline-grid">
    <ServiceCard v-for="card in cards" :key="card.type" :card="card"/>
  </div>
</template>

<style scoped lang="postcss">

</style>
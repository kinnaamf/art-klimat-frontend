<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import SectionCollaboration from "@/components/sections/SectionCollaboration.vue";
import SectionService from "@/components/sections/SectionService.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="max-w-[1440px] mx-auto">
    <AppHero/>

    <SectionCollaboration class="my-24"/>
    <SectionService class="my-24"/>

    <AppFooter/>
  </div>
</template>

<style scoped></style>

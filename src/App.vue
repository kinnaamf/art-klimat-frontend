<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import SectionCollaboration from "@/components/sections/SectionCollaboration.vue";
import SectionService from "@/components/sections/SectionService.vue";
import AppFooter from "@/components/AppFooter.vue";
import SectionProduction from "@/components/sections/SectionProduction.vue";
import SectionCooperation from "@/components/sections/SectionCooperation.vue";
import SectionProducts from "@/components/sections/SectionProducts.vue";
import SectionCompletedProjects from "@/components/sections/SectionCompletedProjects.vue";
import SectionAbout from "@/components/sections/SectionAbout.vue";
</script>

<template>
  <div class="max-w-[1440px] mx-auto">
    <AppHero/>

    <SectionCollaboration class="my-24"/>
    <SectionService class="my-24"/>
    <SectionProduction class="mt-24 mb-[128px]"/>
    <SectionCooperation class="my-24"/>
    <SectionProducts class="pt-[128px] pb-24"/>
    <SectionCompletedProjects class="pt-20 pb-[128px]"/>
    <SectionAbout class="py-[128px]"/>

    <AppFooter/>
  </div>
</template>

<style scoped lang="postcss">

</style>

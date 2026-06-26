<script setup lang="ts">
import CompletedProjectsItem from "@/components/sections/CompletedProjectsItem.vue";

defineProps<{
  completedProjects: { id: number; name: string; surface: string; unit: string, image: string }[];
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-6 mb-6">
    <CompletedProjectsItem
        v-for="project in completedProjects.slice(0, 3)"
        :key="project.image"
        :project="project"
    />
  </div>


  <div class="grid grid-cols-4 gap-6">
    <CompletedProjectsItem
        v-for="project in completedProjects.slice(3)"
        :key="project.image"
        :project="project"
    />
  </div>
</template>

<style scoped lang="postcss">

</style>
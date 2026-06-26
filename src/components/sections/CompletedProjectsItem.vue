<script setup lang="ts">
defineProps<{
  project: { id: number; name: string; surface: string; unit: string, image: string };
}>()
</script>

<template>
  <div>
    <img :src="project.image" alt="" class="rounded-2xl">

    <div class="flex mt-2 gap-1 flex-col p-2">
      <h3 class="text-xl font-medium leading-7 -tracking-wide text-darkgray whitespace-pre-line">{{ project.name }}</h3>
      <span class="text-base font-normal leading-6 text-darkgray/60">{{ project.surface }}
        <span v-html="project.unit"></span>
      </span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
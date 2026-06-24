<script setup lang="ts">
defineProps<{
  title: string
  links: { label: string; to: string }[]
}>()
</script>

<template>
  <div class="text-xl">
    <h4 class="font-medium">{{ title }}</h4>

    <nav class="flex flex-col gap-4 mt-6 text-white/60 font-normal">
      <a  v-for="link in links"
          :key="link.label"
          :to="link.to"
          :href="link.label">
        {{ link.label }}
      </a>
    </nav>
  </div>
</template>

<style scoped lang="postcss">

</style>
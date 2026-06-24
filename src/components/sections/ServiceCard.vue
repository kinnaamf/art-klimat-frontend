<script setup lang="ts">
defineProps<{
  card: { title: string, type: string }
}>()
</script>

<template>
  <div class="relative rounded-3xl bg-white h-[440px] w-full overflow-hidden">
    <h3 class="absolute bottom-12 left-12 text-darkgray text-[40px] font-medium leading-[48px] z-40">
      {{ card.title }}
    </h3>

    <template v-if="card.type === 'planning'">
      <img src="/images/planning.png" alt="" class="relative left-0 w-full object-contain pointer-events-none select-none rounded-3xl object-left-top"/>
    </template>

    <template v-else-if="card.type === 'production'">
      <div class="blur-overlay-top absolute top-0 left-0 w-full h-[120px] pointer-events-none z-10"></div>
      <div class="img-production absolute inset-0 w-full h-full bg-no-repeat"></div>
      <div class="blur-overlay-bottom absolute bottom-0 left-0 w-full h-[120px] pointer-events-none"></div>
    </template>

    <template v-else-if="card.type === 'commissioning'">
      <img src="/images/commissioning.png" alt="" class="relative left-0 w-full object-contain pointer-events-none select-none rounded-3xl object-top"/>
    </template>
  </div>
</template>

<style scoped lang="postcss">
.img-production {
  background-image: url('/images/production.png');
  background-size: 95%;
  background-position: right 35%;
}

.blur-overlay-top {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
}

.blur-overlay-bottom {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%);
  -webkit-mask-image: linear-gradient(to top, black 30%, transparent 100%);
  mask-image: linear-gradient(to top, black 30%, transparent 100%);
}
</style>
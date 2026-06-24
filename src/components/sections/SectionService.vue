<template>
  <section>
    <h2 class="mb-12 text-[#1f1e1e] font-medium text-[4rem] leading-[72px]">
      Полный цикл <span class="text-orange">услуг</span>
    </h2>

    <div class="flex flex-col items-start gap-6 self-stretch">

      <div class="grid-one inline-grid gap-6 self-stretch">
        <div class="relative rounded-3xl bg-white h-[440px] w-full overflow-hidden">
          <h3 class="absolute bottom-12 left-12 text-darkgray text-[40px] font-medium leading-[48px] z-40">Проектирование</h3>
          <img src="/images/planning.png" alt="" class="relative left-0 w-full object-contain pointer-events-none select-none rounded-3xl object-left-top"/>
        </div>
        <div class="relative rounded-3xl bg-white h-[440px] w-full overflow-hidden">
          <h3 class="absolute bottom-12 left-12 text-darkgray text-[40px] font-medium leading-[48px] z-40">Производство</h3>
          <div class="blur-overlay-top absolute top-0 left-0 w-full h-[120px] pointer-events-none z-10"></div>
          <div class="img-production absolute inset-0 w-full h-full bg-no-repeat"></div>
          <div class="blur-overlay-bottom absolute bottom-0 left-0 w-full h-[120px] pointer-events-none"></div>
        </div>
      </div>

      <div class="grid-two inline-grid gap-6 self-stretch">
        <div class="relative rounded-3xl bg-white h-[440px] w-full overflow-hidden">
          <h3 class="absolute bottom-12 left-12 text-darkgray text-[40px] font-medium leading-[48px] z-40">Монтаж</h3>
        </div>
        <div class="relative rounded-3xl bg-white h-[440px] w-full overflow-hidden">
          <h3 class="absolute bottom-12 left-12 text-darkgray text-[40px] font-medium leading-[48px] z-40">Пусконаладка</h3>
          <img src="/images/commissioning.png" alt="" class="relative left-0 w-full object-contain pointer-events-none select-none rounded-3xl object-top"/>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.grid-one {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.50fr);
  grid-template-rows: repeat(1, fit-content(100%));
}

.grid-two {
  grid-template-columns: minmax(0, 1.50fr) minmax(0, 1fr);
  grid-template-rows: repeat(1, fit-content(100%));
}

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
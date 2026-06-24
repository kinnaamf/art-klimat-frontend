<script setup lang="ts">

import IconSearch from "@/components/icons/IconSearch.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconWhatsApp from "@/components/icons/IconWhatsApp.vue";

const navLinks = [
  {
    text: "Главная",
    link: "/",
  },
  {
    text: "Продукция",
    link: "/",
  },
  {
    text: "Услуги",
    link: "/",
  },
  {
    text: "Производство",
    link: "/",
  },
  {
    text: "Объекты",
    link: "/",
  },
  {
    text: "О компании",
    link: "/",
  },
  {
    text: "Контакты",
    link: "/",
  },
]
</script>

<template>
  <header class="flex gap-[10px] text-white text-base">
    <div class="py-1 pl-1 pr-6 flex items-center gap-6 rounded-2xl backdrop-blur-sm bg-white/10 font-normal ">
      <img src="/logo.svg" alt="">

      <div class="flex items-center gap-6">
        <nav>
          <ul class="flex items-center gap-6">
            <li v-for="item in navLinks">
              <a :href="`#${item.link}`">{{ item.text }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-2">
          <IconSearch/>
          <a href="">Поиск</a>
        </div>
      </div>
    </div>

    <div class="flex p-1 gap-1 rounded-2xl backdrop-blur-sm bg-white/10">
      <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
        <a href="">
          <IconTelegram/>
        </a>
      </div>
      <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
        <a href="">
          <IconWhatsApp/>
        </a>
      </div>
      <button class="bg-orange rounded-xl px-4 font-medium">Оставить заявку</button>
    </div>
  </header>
</template>

<style scoped lang="postcss">

</style>
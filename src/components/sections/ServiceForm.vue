<script setup lang="ts">

import RequestButton from "@/components/RequestButton.vue";
import { ref } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";

const submitBtn = ref<HTMLInputElement>()

const isChecked = ref<boolean>(false)
</script>

<template>
  <form action="" class="bg-darkgray text-white p-12 rounded-3xl h-[600px] w-[850px] flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h3 class="font-medium text-[40px] leading-[48px]">Оставьте заявку</h3>
      <h4 class="font-normal text-base leading-[24px]">
        Заполните форму, и наши специалисты свяжутся с вами в ближайшее время
      </h4>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex gap-4 w-full justify-between">
        <input type="text" placeholder="Имя" class="text-[20px] px-[18px] py-[22px] placeholder:text-white/50 bg-white/10 rounded-2xl w-full tracking-[-0.1px] leading-[28px]"/>
        <input type="text" placeholder="Номер телефона" class="text-[20px] px-[18px] py-[22px] placeholder:text-white/50 bg-white/10 rounded-2xl w-full tracking-[-0.1px] leading-[28px]"/>
      </div>

      <textarea placeholder="Комментарий" class="text-[20px] w-full h-[120px] px-[18px] py-[22px] placeholder:text-white/50 bg-white/10 rounded-2xl resize-none tracking-[-0.1px] leading-[28px]"/>
    </div>

    <div>
      <label for="checkbox" class="flex items-start gap-4">
        <input type="checkbox"
               name="checkbox"
               id="checkbox"
               hidden
               v-model="isChecked">
        <div class="w-6 h-6 rounded-[6px] flex items-center justify-center"
             :class="[
                   isChecked ? 'bg-orange' : 'bg-white'
               ]">
          <IconCheck v-if="isChecked"/>
        </div>
        <span>
          Я ознакомлен(а) с
          <a class="text-orange">Политикой конфиденциальности</a>
          и даю Cогласие <br>
          на обработку
          <a class="text-orange">персональных данных</a>
        </span>
      </label>
    </div>

    <div>
      <input type="submit"
             hidden
             ref="submitBtn"
      >
      <RequestButton @click="submitBtn.click()"/>
    </div>
  </form>
</template>

<style scoped lang="postcss">

</style>
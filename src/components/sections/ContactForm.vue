<script setup lang="ts">

import RequestButton from "@/components/RequestButton.vue";
import { ref } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";

const submitBtn = ref<HTMLInputElement>()

const isChecked = ref<boolean>(false)
</script>

<template>
  <form action="" class="text-darkgray rounded-3xl flex flex-col gap-8">
    <div class="flex flex-col gap-4">

    </div>

    <div class="flex flex-col gap-4">
      <div class="flex gap-4 w-full justify-between">
        <input type="text" placeholder="Имя" class="text-[20px] px-[18px] py-[22px] placeholder:text-darkgray/50 bg-black/5 rounded-2xl w-full tracking-[-0.1px] leading-[28px]"/>
        <input type="text" placeholder="Номер телефона" class="text-[20px] px-[18px] py-[22px] placeholder:text-darkgray/50 bg-black/5 rounded-2xl w-full tracking-[-0.1px] leading-[28px]"/>
      </div>

      <textarea placeholder="Комментарий" class="text-[20px] w-full h-[120px] px-[18px] py-[22px] placeholder:text-darkgray/50 bg-black/5 rounded-2xl resize-none tracking-[-0.1px] leading-[28px]"/>
    </div>

    <div>
      <label  class="flex items-start gap-4">
        <input type="checkbox"
               name="checkbox"
               class="sr-only"
               v-model="isChecked">
        <div class="w-6 h-6 rounded-[6px] border border-orange flex items-center justify-center"
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
      <RequestButton class="text-white" @click="submitBtn.click()"/>
    </div>
  </form>
</template>

<style scoped lang="postcss">

</style>
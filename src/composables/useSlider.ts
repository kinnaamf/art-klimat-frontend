import {
  IconCycle,
  IconExperience,
  IconWarehouse,
  IconEquipment,
  IconFlexibility,
  IconComplexity,
} from "@/components/icons/slider.ts"

import { ref } from "vue";

export const useSlider = () => {
  const sliderData = [
    {
      title: 'Полный цикл работ',
      description: 'По инженерным системам: от проектирования до запуска и сервисного обслуживания',
      icon: IconCycle
    },
    {
      title: 'Более 15 лет опыта',
      description: 'В сфере вентиляции, кондиционирования и инженерных систем. Компания работает с 2007 года',
      icon: IconExperience
    },
    {
      title: 'Более 3600 м²',
      description: 'Собственных складов и производственных площадей. Наличие продукции и материалов позволяет минимизировать сроки поставки',
      icon: IconWarehouse
    },
    {
      title: 'Современное оборудование',
      description: 'Применение актуальных инженерных решений. Использование передовых технологий в производстве и монтаже',
      icon: IconEquipment
    },
    {
      title: 'Гибкий подход',
      description: 'К каждому проекту. Подбор решений под задачи, бюджет и сроки заказчика',
      icon: IconFlexibility,
    },
    {
      title: 'Проекты любой сложности',
      description: 'Жилые комплексы, производственные предприятия, офисные здания, гостиницы, склады и промышленные объекты',
      icon: IconComplexity
    },
  ]

  const sliderRef = ref<HTMLElement | null>(null)

  const isDown = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)

  const startDragging = (e: MouseEvent) => {
    if (!sliderRef.value) return;
    isDown.value = true

    startX.value = e.pageX - sliderRef.value.offsetLeft

    scrollLeft.value = sliderRef.value.scrollLeft
  }

  const drag = (e: MouseEvent) => {
    if (!isDown.value || !sliderRef.value) return;
    e.preventDefault()

    const x = e.pageX - sliderRef.value.offsetLeft
    const walk = (x - startX.value) * 1.5

    sliderRef.value.scrollLeft = scrollLeft.value - walk
  }

  const stopDragging = () => {
    isDown.value = false
  }

  return {
    sliderRef,
    startDragging,
    drag,
    stopDragging,
    sliderData,
  }
}
<template>
  <div
    class="relative w-full pb-0 md:pb-32 flex flex-col lg:flex-row justify-between items-start z-50"
  >
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      class="w-full lg:w-1/4 mb-[51px] lg:mb-0 flex justify-evenly gap-[20px]"
    >
      <img :src="benefit.img" class="w-22 h-22" :alt="benefit.title" />
      <div class="flex flex-col">
        <span
          class="flex flex-col font-bold text-2xl leading-7"
          v-html="benefit.title"
        />
        <span class="mt-[12px] font-normal text-[18px] leading-[27px]">{{
          benefit.description
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    benefits: [
      {
        title: 'Быстрая <br /> доставка',
        description:
          'Выбирайте для доставки удобный пункт выдачи или доставку курьером',
        img: require('~/static/img/delivery.svg'),
      },
      {
        title: 'Бесплатная <br /> упаковка',
        description:
          'Экономьте за счет уменьшения веса и объема посылки до 80%',
        img: require('~/static/img/package.svg'),
      },
      {
        title: 'Бесплатная <br /> консолидация',
        description:
          'Объединяйте несколько посылок в одну для экономии на доставке',
        img: require('~/static/img/consolidation.svg'),
      },
    ],
  }),
}
</script>

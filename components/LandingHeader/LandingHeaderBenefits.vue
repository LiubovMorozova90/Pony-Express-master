<template>
  <div class="content flex justify-between items-start pb-32">
    <div
      v-for="(benefit, index) in benefits"
      :key="`benefit-${index}`"
      class="title flex gap-4 w-1/4 z-50"
    >
      <div class="w-22 h-22">
        <img :src="benefit.img" class="z-50" alt="" />
      </div>
      <div class="flex flex-col">
        <span
          class="flex flex-col font-bold text-2xl leading-7 mb-3"
          v-html="benefit.title"
        />
        <span class="t-t font-normal text-lg leading-6 max-w-xs">{{
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

<style scoped>
@media (max-width: 840px) {
  .title {
    @apply gap-2;
  }
}

@media (max-width: 640px) {
  .content {
    @apply flex flex-col w-full;
  }

  .title {
    font-size: 26px;
    line-height: 29px;
    gap: 20px;
    width: 100%;
  }

  .t-t {
    margin-bottom: 50px;
  }
}

@media (max-width: 540px) {
  .container {
    max-width: 440px;
  }
}

@media (max-width: 440px) {
  .container {
    max-width: 400px;
  }

  .text-title {
    @apply text-3xl mb-3 w-52;
  }

  .text-t {
    @apply text-lg leading-5 w-52;
  }

  .btn {
    max-width: 100%;
    font-size: 16px;
  }

  .title {
    @apply pb-12;
  }
}

@media (max-width: 390px) {
  .container {
    max-width: 350px;
  }
}
</style>

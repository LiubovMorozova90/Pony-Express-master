<template>
  <div class="mt-20 pb-12">
    <div class="flex flex-col border p-6">
      <div v-for="shop in shops" :key="shop.id" class="content border-b py-6">
        <div class="flex justify-between">
          <div class="flex gap-6 items-center z-50">
            <img :src="shop.img" class="z-50" alt="" />
            <p class="font-bold text-lg leading-5 text-greenbasic">
              {{ shop.title }}
            </p>
          </div>
          <button class="z-50" @click="isShown = !isShown">
            <img :src="require('@/static/img/chevron-down-green.svg')" alt="" />
          </button>
        </div>
        <div
          :style="`display: ${isShown ? block : none}`"
          class="section-info mt-6"
        >
          {{ shop.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    shops: [
      {
        img: require('~/static/img/shops-levi.svg'),
        title: 'LEVI’S',
        description:
          'Американская компания, основанная в 1853 году Ливай Страуссом; известный производитель одежды в США и обуви. Штаб-квартира — в Сан-Франциско, США.',
      },
      {
        img: require('~/static/img/shops-6pm.svg'),
        title: '6pm',
        description:
          'Подразделение Zappos IP, Inc., занимающееся дисконтной розничной торговлей.',
      },
      {
        img: require('~/static/img/shops-ebay.svg'),
        title: 'ebay.com',
        description:
          'Aмериканская компания, предоставляющая услуги в областях интернет-аукционов и интернет-магазинов.',
      },
      {
        img: require('~/static/img/shops-levi.svg'),
        title: 'LEVI’S',
        description:
          'Американская компания, основанная в 1853 году Ливай Страуссом; известный производитель одежды в США и обуви. Штаб-квартира — в Сан-Франциско, США.',
      },
      {
        img: require('~/static/img/shops-6pm.svg'),
        title: '6pm',
        description:
          'Подразделение Zappos IP, Inc., занимающееся дисконтной розничной торговлей.',
      },
      {
        img: require('~/static/img/shops-ebay.svg'),
        title: 'ebay.com',
        description:
          'Aмериканская компания, предоставляющая услуги в областях интернет-аукционов и интернет-магазинов.',
      },
      {
        img: require('~/static/img/shops-levi.svg'),
        title: 'LEVI’S',
        description:
          'Американская компания, основанная в 1853 году Ливай Страуссом; известный производитель одежды в США и обуви. Штаб-квартира — в Сан-Франциско, США.',
      },
      {
        img: require('~/static/img/shops-6pm.svg'),
        title: '6pm',
        description:
          'Подразделение Zappos IP, Inc., занимающееся дисконтной розничной торговлей.',
      },
      {
        img: require('~/static/img/shops-ebay.svg'),
        title: 'ebay.com',
        description:
          'Aмериканская компания, предоставляющая услуги в областях интернет-аукционов и интернет-магазинов.',
      },
    ],
    isShown: false,
  }),
}
</script>

<style scoped>
.content:first-of-type {
  @apply pt-0 pb-6;
}

.content:last-of-type {
  @apply border-0 pb-0;
}
</style>

<template>
  <div
    class="mt-5 relative flex flex-col xl:flex-row justify-end pt-0 xl:pt-12 pb-4"
  >
    <div
      class="w-full xl:w-1/2 max-h-[17rem] md:max-h-[40rem] xl:max-h-full flex z-30 overflow-hidden"
    >
      <img
        alt=""
        :src="require('@/static/img/info-forwarding-img.png')"
        class="w-full object-left-top object-cover"
      />
    </div>
    <div
      class="w-full xl:w-1/2 flex flex-col bg-white p-[20px] xl:px-20 xl:py-12 z-50"
    >
      <p class="title-text max-w-xl mb-11">Как работает Mail Forwarding</p>
      <div
        v-for="(forwarding, index) in forwardings"
        :key="`forwarding-${index}`"
        class="section-main flex items-center gap-2 mb-14"
      >
        <img :src="forwarding.img" alt="" />
        <span class="text text-lg leading-7">{{ forwarding.description }}</span>
      </div>
      <button
        class="w-full px-4 py-2 rounded-full bg-greenbasic xl:bg-white border border-greenbasic font-bold text-center text-white xl:text-greenbasic z-50"
      >
        Получить адрес за рубежом
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    forwardings: [
      {
        description:
          'Цена в России «кусается», а при заказе из другой страны товар не доставляют на Ваш домашний адрес?',
        img: require('~/static/img/info-forwarding-1.svg'),
      },
      {
        description:
          'Предоставим бесплатно почтовый адрес за рубежом, на который онлайн-магазин сможет отправить Ваш товар',
        img: require('~/static/img/info-forwarding-2.svg'),
      },
      {
        description:
          'Проверим и упакуем все ваши заказы, приходящие на этот адрес, в одну посылку.',
        img: require('~/static/img/info-forwarding-3.svg'),
      },
      {
        description:
          'Отправим товары к вам домой или в пункт выдачи без переплат по выгодной цене',
        img: require('~/static/img/info-forwarding-4.svg'),
      },
    ],
  }),
}
</script>

<style scoped>
.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}

@media (max-width: 768px) {
  .title-text {
    @apply text-5xl;
  }
}

@media (max-width: 640px) {
  .section-main {
    @apply pr-0;
  }
}

@media (max-width: 540px) {
  .title-text {
    @apply text-3xl leading-9;
  }
}
</style>

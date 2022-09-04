<template>
  <div class="content flex pt-12 pb-4">
    <img
      alt=""
      :src="require('@/static/img/info-forwarding-img.png')"
      class="title-img z-30"
    />
    <div class="main-text flex flex-col bg-white px-20 py-12 z-50">
      <p class="title-text max-w-xl mb-11">Как работает Mail Forwarding</p>
      <div
        v-for="(forwarding, index) in forwardings"
        :key="`forwarding-${index}`"
        class="section-main flex gap-2 mb-14 pr-28"
      >
        <img :src="forwarding.img" alt="" />
        <span class="text font-normal text-lg leading-7">{{
          forwarding.description
        }}</span>
      </div>
      <button class="btn border border-greenbasic text-greenbasic w-60 z-50">
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

.btn {
  @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
}

@media (max-width: 1280px) {
  .title-img {
    @apply relative;
  }

  .main-text {
    @apply absolute max-w-3xl mt-96 ml-96;
  }

  .content {
    @apply pb-96;
  }
}

@media (max-width: 1024px) {
  .main-text {
    @apply ml-72;
  }
}

@media (max-width: 840px) {
  .main-text {
    @apply ml-40;
  }
}

@media (max-width: 768px) {
  .main-text {
    @apply ml-20;
  }

  .title-text {
    @apply text-5xl;
  }
}

@media (max-width: 640px) {
  .main-text {
    @apply ml-5;
  }

  .section-main {
    @apply pr-0;
  }
}

@media (max-width: 540px) {
  .main-text {
    @apply -ml-14 mt-80 pr-12;
  }

  .btn {
    background: #76bc21;
    border: none;
    min-width: 350px;
    color: white;
  }

  .title-text {
    @apply text-3xl leading-9;
  }
}

@media (max-width: 440px) {
  .main-text {
    @apply mt-72 px-14;
  }

  .content {
    @apply mt-5 pt-0;
  }
}
</style>

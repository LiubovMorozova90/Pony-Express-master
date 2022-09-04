<template>
  <div class="forwarding-main-text flex gap-56 mb-40">
    <div class="section-img">
      <img
        alt=""
        :src="require('@/static/img/main-forwarding-1.png')"
        class="img-main relative z-20"
      />
      <img
        alt=""
        :src="require('@/static/img/main-forwarding-2.png')"
        class="img-hidden absolute z-30 -mt-52 ml-32"
      />
    </div>
    <div class="content flex flex-col bg-main w-1/2 z-50">
      <p class="title-text mb-11">
        Доставка из США, Европы и Японии с PONY EXPRESS
      </p>
      <div v-for="item in mainForwarding" :key="item.id">
        <p
          class="forwarding-main-info font-normal text-xl leading-7 mb-6"
          v-html="item.title"
        ></p>
      </div>
      <div class="mt-14">
        <button class="btn border text-greenbasic border-greenbasic mt-5">
          Получить адрес за рубежом
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mainForwarding: [
      { title: 'Доставка осуществляется компанией PONY EXPRESS' },
      {
        title:
          'Посылки летят из США, Европы и Японии, проходят таможенное оформление и доставляются по всей России до пунктов выдачи или до двери курьером по Вашему желанию.',
      },
      {
        title: 'Сроки доставки от 5 дней. Отличные тарифы на экспресс-доставку',
      },
      {
        title:
          'Отследить посылку после отправки по номеру заказа можно на сайте <a href="#" style="color: #00833E; text-decoration-line: underline;">PONY EXPRESS</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Условия доставки</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Ограничения по услуге</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Информация по лимитам беспошлинного ввоза</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Где находятся пункты выдачи</a>',
      },
    ],
  }),
}
</script>

<style scoped>
.forwarding-main-info:before {
  content: url('static/img/forwarding-text.svg');
  padding-right: 12px;
}

.forwarding-main-text {
  padding-top: 650px;
}

.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}

.btn {
  @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
}

@media (max-width: 1024px) {
  .img-hidden {
    @apply hidden;
  }

  .forwarding-main-text {
    @apply gap-16;
  }
}

@media (max-width: 840px) {
  .forwarding-main-text {
    margin-top: 500px;
  }
}

@media (max-width: 768px) {
  .title-text {
    @apply text-5xl;
  }

  .content {
    @apply absolute w-full px-10 py-10 mt-72;
  }

  .section-img {
    @apply relative;
  }

  .img-main {
    @apply -mt-64 ml-20;
  }
}

@media (max-width: 640px) {
  .img-main {
    @apply ml-5;
  }

  .content {
    @apply -ml-12;
  }
}

@media (max-width: 540px) {
  .title-text {
    @apply text-3xl leading-9;
  }

  .btn {
    min-width: 100%;
  }

  .img-main {
    @apply -mt-40 ml-2;
  }
}

@media (max-width: 440px) {
  .img-main {
    @apply mt-20 ml-0;
  }

  .content {
    margin-top: 500px;
    margin-left: -20px;
  }
}

@media (max-width: 440px) {
  .img-main {
    @apply mt-28;
  }
}
</style>

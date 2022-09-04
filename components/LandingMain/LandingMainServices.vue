<template>
  <div class="flex pt-12">
    <div class="content bg-white absolute z-50 max-w-3xl py-12 px-20 mt-8">
      <p class="title-text mb-11">Услуги Mail Forwarding</p>
      <p class="font-bold text-2xl leading-7 mb-5">Основные услуги</p>
      <div
        v-for="(service, index) in services"
        :key="`service-${index}`"
        class="section-service"
      >
        <div class="text-t flex justify-between gap-4 border-t-2 py-5">
          <div class="flex flex-col gap-2 font-normal">
            <span class="text-lg leading-7">{{ service.title }}</span>
            <span
              v-if="service.remark"
              class="text-xs leading-3 text-aluminum max-w-xs"
              >{{ service.remark }}</span
            >
          </div>
          <div>
            <span class="font-bold text-lg leading-7">{{ service.price }}</span>
          </div>
        </div>
      </div>
      <button class="btn border text-greenbasic border-greenbasic mt-5">
        Получить адрес за рубежом
      </button>
    </div>
    <img
      alt=""
      :src="require('@/static/img/mail-forwarding.png')"
      class="main-img relative z-30 left-2/4 pl-8"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      { title: 'Инспекция посылки + 5 фото', price: '5$', remark: '' },
      {
        title: 'Предоставление адреса доставки за рубежом',
        price: 'Бесплатно',
        remark: '',
      },
      {
        title: 'Приём и хранение товаров на складе до 30 дней',
        price: 'Бесплатно',
        remark: '',
      },
      { title: 'Хранение свыше 30 дней', price: '1$/день', remark: '' },
      {
        title: 'Удаление лишней упаковки с товара',
        price: 'Бесплатно',
        remark:
          'Услуга предоставляется бесплатно, только при заказе услуги "Инспекция посылки + 5 фото" =5$',
      },
      {
        title: 'Разделение покупки на товары (до 10 шт.)',
        price: 'Бесплатно',
        remark:
          'Услуга предоставляется бесплатно, только при заказе услуги "Инспекция посылки + 5 фото" =5$',
      },
      {
        title: 'Сравнить товар и инвойс (инспекция, до 5 фото)',
        price: '5$',
        remark: '',
      },
      { title: 'Дополнительные 10 фото товаров', price: '2$', remark: '' },
      {
        title: 'Упаковка посылки для отправки в Россию',
        price: 'Бесплатно',
        remark: '',
      },
      { title: 'Нестандартная упаковка', price: 'Индивидуально', remark: '' },
      {
        title: 'Добавление товара в исходящую посылку',
        price: 'Бесплатно',
        remark: '',
      },
      {
        title: 'Сканирование документов (до 10 страниц)',
        price: 'Бесплатно',
        remark: '',
      },
      { title: 'Индивидуальная упаковка', price: '10$', remark: '' },
      { title: 'Розыск MF-заказа', price: '10$', remark: '' },
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

@media (max-width: 1024px) {
  .content {
    @apply bg-main max-w-2xl;
  }
}

@media (max-width: 840px) {
  .main-img {
    @apply -mt-24 left-0 pl-0;
  }

  .content {
    margin-top: 500px;
    min-width: 740px;
  }
}

@media (max-width: 768px) {
  .title-text {
    @apply text-5xl;
  }

  .content {
    margin-left: -36px;
  }
}

@media (max-width: 640px) {
  .content {
    margin-top: 400px;
    margin-left: -50px;
    padding: 18px;
  }

  .section-service {
    max-width: 600px;
  }
}

@media (max-width: 540px) {
  .section-service {
    max-width: 500px;
  }

  .title-text {
    @apply text-3xl leading-9;
  }

  .content {
    margin-top: 340px;
  }

  .btn {
    min-width: 500px;
  }
}

@media (max-width: 440px) {
  .section-service {
    max-width: 400px;
  }

  .content {
    max-width: 440px;
    padding-left: 40px;
  }

  .btn {
    min-width: 420px;
  }
}

@media (max-width: 395px) {
  .content {
    margin-top: 250px;
  }

  .section-service {
    max-width: 375px;
    padding-right: 20px;
  }

  .btn {
    min-width: 365px;
  }
}
</style>

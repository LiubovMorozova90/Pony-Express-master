<template>
  <div class="flex flex-col pt-12 pb-24">
    <div class="content flex flex-row gap-10 items-center z-50">
      <div
        class="main-text flex justify-between gap-10 items-center text-white pb-20 z-50"
      >
        <p class="title-text w-min">Популярные магазины</p>
        <p class="text-t font-bold text-2xl leading-8 max-w-md">
          Устройте шоппинг без границ в онлайн-магазинах СШA, Европы и Японии.
          Воспользуйтесь скидками, распродажами и выгодными предложениями от
          любимых брендов
        </p>
      </div>
      <button class="btn btn-adress text-white border w-60 z-50">
        Получить адрес за рубежом
      </button>
    </div>
    <div class="flex flex-col items-center z-50">
      <landing-main-slide />
      <button class="btn text-white bg-lightgreen">Все магазины</button>
    </div>
  </div>
</template>

<script>
import LandingMainSlide from './LandingMainSlider.vue'

export default {
  components: {
    LandingMainSlide,
  },
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
  .content {
    @apply flex flex-col;
  }

  .main-text {
    @apply gap-52 pb-6;
  }

  .btn-adress {
    @apply mb-6;
  }

  .text-t {
    @apply text-black;
  }
}

@media (max-width: 1024px) {
  .main-text {
    @apply gap-32;
  }
}

@media (max-width: 840px) {
  .main-text {
    @apply flex flex-col gap-5 items-start w-full;
  }
}

@media (max-width: 768px) {
  .title-text {
    @apply text-5xl;
  }
}

@media (max-width: 440px) {
  .title-text {
    @apply text-3xl w-full;
  }

  .text-t {
    @apply text-lg;
  }

  .btn {
    background: #76bc21;
    border: none;
    min-width: 350px;
  }
}
</style>

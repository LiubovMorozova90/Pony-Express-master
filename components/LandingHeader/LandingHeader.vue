<template>
  <header class="header">
    <div class="container block">
      <div class="flex justify-between gap-5">
        <img :src="require('@/static/img/header-navigation-logo.svg')" alt="" />
        <LandingHeaderNavigation />
      </div>
      <div class="title flex flex-col justify-start pb-20">
        <p
          class="text-title uppercase font-extrabold leading-23 text-7xl tracking-wide max-w-2xl mb-12"
        >
          зарубежный sale
        </p>
        <p class="text-t font-bold text-2xl max-w-xs mb-44">
          Выгодные онлайн покупки за рубежом с быстрой доставкой
        </p>
        <button class="btn text-xl leading-8 text-white bg-greenbasic max-w-xs">
          Получить адрес за рубежом
        </button>
      </div>
      <LandingHeaderBenefits />
    </div>
  </header>
</template>

<script>
import LandingHeaderNavigation from './LandingHeaderNavigation.vue'
import LandingHeaderBenefits from './LandingHeaderBenefits.vue'

export default {
  components: { LandingHeaderNavigation, LandingHeaderBenefits },
}
</script>

<style scoped>
.header {
  background-image: url('static/img/header-fon.png');
  background-size: cover;
}

.btn {
  @apply font-bold text-center rounded-full px-4 py-2;
}

.container {
  max-width: 1281px;
  margin: 0 auto;
}

@media (max-width: 1280px) {
  .container {
    max-width: 1100px;
  }
}

@media (max-width: 1024px) {
  .container {
    max-width: 900px;
  }
}

@media (max-width: 840px) {
  .container {
    max-width: 740px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 668px;
  }

  .text-title {
    @apply text-5xl;
  }
}

@media (max-width: 640px) {
  .container {
    max-width: 540px;
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

@media (max-width: 395px) {
  .container {
    max-width: 350px;
  }
}
</style>

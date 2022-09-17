<template>
  <main>
    <div class="container block">
      <LandingMainInfoTitle />
      <LandingMainPopularStores />
      <LandingMainMailForwarding />
      <div
        class="mt-[100px] content flex flex-col text-black lg:text-white pb-28"
      >
        <p class="title-text max-w-3xl mb-9 z-50">
          Рассчитайте стоимость доставки
        </p>
        <div class="section-main grid grid-cols-3 gap-6 z-50">
          <p class="grid-text text-t">Страна отправления</p>
          <landing-main-drop-down
            v-model="choiceDeparture"
            :options-list="Departure"
            class="z-50"
          />
          <div
            class="flex justify-between grid-text border-b-2 border-lightgreen pb-2"
          >
            <button @click="currentWeight -= 0.5">
              <img alt="" :src="require('@/static/img/subtraction.svg')" />
            </button>
            <p>{{ currentWeight }} кг</p>
            <button @click="currentWeight += 0.5">
              <img alt="" :src="require('@/static/img/sum.svg')" />
            </button>
          </div>
          <p class="grid-text text-t row-span-3">Адрес доставки</p>
          <landing-main-drop-down
            v-model="choiceDelivery"
            :options-list="Delivery"
          />
          <div
            class="flex justify-between grid-text border-b-2 border-lightgreen"
          >
            <input class="bg-transparent w-80" />
            <img alt="" :src="require('@/static/img/akar-icons_pencil.svg')" />
          </div>
          <div class="flex justify-between items-center font-bold">
            <p class="text-lg leading-5">Пункт выдачи</p>
            <p class="text-lg leading-5">{{}} дней</p>
            <p class="text-3xl leading-10">{{}} $</p>
          </div>
          <div class="flex justify-between items-center font-bold">
            <p class="text-lg leading-5">До двери</p>
            <p class="text-lg leading-5">{{}} дней</p>
            <p class="text-3xl leading-10">{{}} $</p>
          </div>
          <button class="btn bg-lightgreen w-32">Подробнее</button>
          <p class="text-mass font-bold text-lg leading-5">
            Примерный объемный вес посылок
          </p>
        </div>
      </div>
      <div class="section-weight relative z-50 pb-12 ml-28">
        <VolumeWeights class="z-50" @changeWeight="currentWeight = $event" />
      </div>
      <LandingMainServices class="mb-[80px] md:mb-[198px]" />
      <LandingMainForwarding class="mb-[40px] md:mb-[140px]" />
    </div>
  </main>
</template>

<script>
import LandingMainMailForwarding from './LandingMainMailForwarding.vue'
import LandingMainServices from './LandingMainServices.vue'
import LandingMainForwarding from './LandingMainForwarding.vue'
import VolumeWeights from '~/components/LandingMain/VolumeWeights.vue'
import LandingMainDropDown from '~/components/LandingMain/LandingMainDropdown.vue'
import LandingMainInfoTitle from '~/components/LandingMain/LandingMainInfoTitle.vue'
import LandingMainPopularStores from '~/components/LandingMain/LandingMainPopularStores.vue'

export default {
  components: {
    LandingMainDropDown,
    VolumeWeights,
    LandingMainMailForwarding,
    LandingMainServices,
    LandingMainForwarding,
    LandingMainInfoTitle,
    LandingMainPopularStores,
  },
  data: () => ({
    Departure: [
      { id: 1, title: 'Китай' },
      { id: 2, title: 'Япония' },
      { id: 3, title: 'Грузия' },
      { id: 4, title: 'Мексика' },
      { id: 5, title: 'США' },
    ],
    Delivery: [
      { id: 101, title: 'Китай' },
      { id: 102, title: 'Япония' },
      { id: 103, title: 'Грузия' },
      { id: 104, title: 'Мексика' },
      { id: 105, title: 'США' },
    ],
    choiceDeparture: '',
    choiceDelivery: '',
    currentWeight: 1,
  }),
}
</script>

<style scoped>
.grid-text {
  @apply font-bold text-xl leading-7;
}

.text-mass {
  text-align: end;
}

.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}

.btn {
  @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
}

@media (max-width: 1280px) {
  .section-weight {
    @apply ml-0;
  }
}

@media (max-width: 1024px) {
  .section-weight {
    @apply -mt-20;
  }
}

@media (max-width: 840px) {
  .section-weight {
    @apply -mt-32;
  }
}

@media (max-width: 768px) {
  .section-main {
    @apply flex flex-col gap-8;
  }

  .title-text {
    @apply text-5xl;
  }

  .text-t {
    @apply text-center;
  }
}

@media (max-width: 540px) {
  .title-text {
    @apply text-3xl leading-9;
  }

  .btn {
    min-width: 100%;
  }

  .text-mass {
    @apply text-center;
  }

  .section-weight {
    @apply hidden;
  }
}

@media (max-width: 395px) {
  .container {
    max-width: 350px;
  }
}
</style>

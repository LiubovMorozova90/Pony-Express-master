<template>
  <div class="font-circe bg-main">
    <div class="container block">
      <the-header />
      <main class="pb-40">
        <p class="font-bold text-4xl leading-10 text-greenbasic mb-8">
          Список популярных зарубежных интернет-магазинов
        </p>
        <div class="section-form flex flex-col px-6 py-8 mb-7">
          <div class="flex justify-between gap-5 mb-7">
            <LandingMainDropdownVue
              v-model="choiceArea"
              :options-list="Area"
              class="w-96"
            />
            <input class="bg-transparent w-96" />
            <LandingMainDropdownVue
              v-model="choiceSort"
              :options-list="Sort"
              class="w-96"
            />
            <button class="btn border border-white text-white w-24">
              Поиск
            </button>
          </div>
          <div
            class="flex justify-start items-center gap-8 font-bold text-white"
          >
            <p class="text-xl leading-6">Все категории</p>
            <button class="btn bg-greenbasic">Выбрать категорию</button>
          </div>
        </div>
        <LandingMainShops />
        <button class="btn bg-greenbasic text-white">Показать ещё</button>
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import LandingMainShops from '~/components/LandingMain/LandingMainShops.vue'
import LandingMainDropdownVue from '~/components/LandingMain/LandingMainDropdown.vue'

export default {
  components: {
    TheHeader,
    LandingMainShops,
    LandingMainDropdownVue,
  },
  data: () => ({
    Area: [
      { id: 111, title: 'Везде' },
      { id: 112, title: 'Везде' },
      { id: 113, title: 'Везде' },
      { id: 114, title: 'Везде' },
      { id: 115, title: 'Везде' },
    ],
    Sort: [
      { id: 201, title: 'По популярности' },
      { id: 102, title: 'По рейтингу' },
      { id: 103, title: 'По популярности' },
      { id: 104, title: 'По рейтингу' },
      { id: 105, title: 'По популярности' },
    ],
    choiceArea: '',
    choiceSort: '',
  }),
}
</script>

<style scoped>
.container {
  max-width: 1281px;
  margin: 0 auto;
}

.section-form {
  background: linear-gradient(270.19deg, #45a145 -0.01%, #71bc46 98.04%);
}

.btn {
  @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
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
}

@media (max-width: 395px) {
  .container {
    max-width: 350px;
  }
}
</style>

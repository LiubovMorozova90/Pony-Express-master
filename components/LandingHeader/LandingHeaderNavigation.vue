<template>
  <div class="flex justify-between items-center">
    <div v-if="isMobile" class="nav-btn relative z-50">
      <the-button
        :aria-label="isShown ? 'открыть меню' : 'закрыть меню'"
        :btn-img-src="isShown ? 'close-menu.svg' : 'burger-menu.svg'"
        @click.native="isShown = !isShown"
      />
    </div>
    <div
      v-if="isShown || isNotMobile"
      class="z-40 absolute top-0 right-0 bottom-0 left-0 md:static w-full p-[20px] md:p-0 flex flex-col md:flex-row md:items-center md:justify-between bg-white md:bg-transparent"
    >
      <ul
        class="md:w-3/4 pl-[16px] lg:pl-0 flex flex-col md:flex-row lg:text-lg font-bold"
      >
        <li
          v-for="nav in navigation"
          :key="nav.id"
          class="mb-[20px] md:mb-0 md:mr-[20px] lg:mr-12"
        >
          <nuxt-link :to="nav.link">{{ nav.title }}</nuxt-link>
        </li>
      </ul>
      <button
        class="order-first md:order-last w-9/12 md:w-1/4 mb-[36px] md:mb-0 px-4 py-2 border border-greenbasic rounded-full bg-greenbasic md:bg-white text-center text-white md:text-greenbasic font-bold"
      >
        <a href="#">Личный кабинет</a>
      </button>
    </div>
  </div>
</template>

<script>
import getScreenBreakpoint from '~/mixins/getScreenBreakpoint'

import TheButton from '~/components/TheButton.vue'

export default {
  components: { TheButton },

  mixins: [getScreenBreakpoint],

  data: () => ({
    navigation: [
      { link: '#', title: 'Адреса' },
      { link: '#', title: 'Магазины' },
      { link: '#', title: 'Как это работает' },
      { link: '#', title: 'Тарифы' },
      { link: '#', title: 'Услуги' },
    ],
    isShown: false,
  }),
}
</script>

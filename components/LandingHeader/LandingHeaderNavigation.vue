<template>
  <div class="flex justify-between items-center">
    <div class="relative z-50 md:hidden">
      <the-button
        :aria-label="isShown ? 'открыть меню' : 'закрыть меню'"
        :btn-img-src="isShown ? 'close-menu.svg' : 'burger-menu.svg'"
        @click.native="toggleMenu"
      />
    </div>
    <div
      v-if="isShown || isNotMobile"
      class="absolute top-0 right-0 bottom-0 left-0 z-40 md:static w-full px-[20px] py-[25px] md:py-0 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between bg-white md:bg-transparent"
    >
      <ul
        class="md:w-3/4 pl-[16px] lg:pl-0 flex flex-col md:flex-row md:justify-center lg:text-lg font-bold"
      >
        <li
          v-for="nav in navigation"
          :key="nav.id"
          class="mb-[20px] md:mb-0 last:mb-0 md:mr-[10px] lg:mr-[20px] lg:mr-12 last:mr-0"
        >
          <nuxt-link :to="nav.link" class="whitespace-nowrap">{{
            nav.title
          }}</nuxt-link>
        </li>
      </ul>
      <button
        class="order-first md:order-last w-9/12 md:w-auto mb-[36px] md:mb-0 px-[24px] py-[12px] md:py-[8px] border border-greenbasic rounded-full bg-greenbasic md:bg-white text-center text-white md:text-greenbasic font-bold"
      >
        <a href="#">{{
          isHorizontalPadOrMore ? 'Личный кабинет' : 'Кабинет'
        }}</a>
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

  methods: {
    toggleMenu() {
      this.isShown = !this.isShown

      if (this.isShown) {
        document.body.style = 'overflow: hidden'
      } else {
        document.body.style = ''
      }
    },
  },
}
</script>

<template>
  <div class="relative overflow-hidden font-circe bg-main">
    <landing-header />
    <div class="relative">
      <landing-main />
      <div
        class="absolute top-[-127rem] md:top-[-63rem] bottom-0 -left-52 -right-40"
      >
        <div
          v-for="item in isMobile ? 3 : 6"
          :key="`bg-rectangle-${item}`"
          class="absolute w-2050 h-800"
          :style="getPaneStyle(item)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import getScreenBreakpoint from '~/mixins/getScreenBreakpoint'

import LandingHeader from '~/components/LandingHeader/LandingHeader'
import LandingMain from '~/components/LandingMain/LandingMain.vue'

export default {
  components: {
    LandingHeader,
    LandingMain,
  },

  mixins: [getScreenBreakpoint],

  methods: {
    getPaneStyle(item) {
      const lightBg =
        'linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%)'
      const darkBg =
        'linear-gradient(270.19deg, #1A771A -0.01%, #56A329 98.04%)'

      const background = `${
        this.isNotMobile
          ? item % 2
            ? lightBg
            : darkBg
          : item === 1
          ? lightBg
          : darkBg
      }`

      const shadow = `${item % 2 ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'}`

      const rotate = `rotate(${item % 2 || this.isMobile ? -21 : 15}deg)`

      const zIndex = `${item % 2 ? 1 : 0}`

      const top =
        this.isNotMobile || (this.isMobile && item < 3)
          ? `${item * 11}%`
          : `${item * 15}%`

      return `transform: ${rotate}; top: ${top}; z-index: ${zIndex}; box-shadow: ${shadow}; background: ${background}`
    },
  },
}
</script>

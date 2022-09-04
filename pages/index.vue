<template>
  <div class="font-circe bg-main relative overflow-hidden">
    <div class="tape-content absolute top-0 bottom-0 -left-52 -right-40">
      <div
        v-for="item in 6"
        :key="`bg-rectangle-${item}`"
        class="main-tape absolute w-2050 h-800"
        :style="`transform: rotate(${item % 2 ? -21 : 15}deg); top: ${
          item * 11
        }%; z-index: ${item % 2 ? 1 : 0}; box-shadow: ${
          item % 2 ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'
        }; background: ${
          item % 2
            ? 'linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%)'
            : 'linear-gradient(270.19deg, #1A771A -0.01%, #56A329 98.04%)'
        }`"
      ></div>
    </div>
    <Header></Header>
    <LandingMain></LandingMain>
    <LandingFooter></LandingFooter>
  </div>
</template>

<script>
import Header from '~/components/LandingHeader/LandingHeader.vue'
import LandingMain from '~/components/LandingMain/LandingMain.vue'
import LandingFooter from '~/components/LandingFooter/LandingFooter.vue'

export default {
  components: {
    Header,
    LandingMain,
    LandingFooter,
  },
}
</script>

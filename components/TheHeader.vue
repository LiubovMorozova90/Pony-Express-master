<template>
  <header
    class="pt-[14px] mb-[25px] md:mb-[126px] flex justify-between gap-5 z-50"
  >
    <nuxt-link to="/" class="md:w-2/12"
      ><img :src="require('@/static/img/header-navigation-logo.svg')" alt=""
    /></nuxt-link>
    <landing-header-navigation class="md:w-10/12" />
  </header>
</template>

<script>
import LandingHeaderNavigation from '~/components/LandingHeader/LandingHeaderNavigation'

export default {
  components: { LandingHeaderNavigation },
}
</script>

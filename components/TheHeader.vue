<template>
  <header
    class="pt-[16px] md:pt-[14px] mb-[24px] md:mb-[126px] flex justify-between z-50"
  >
    <nuxt-link to="/" class="md:w-2/12" title="перейти на главную страницу"
      ><img
        :src="require('@/static/img/header-navigation-logo.svg')"
        aria-hidden="true"
        alt=""
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

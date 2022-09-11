<template>
  <div class="font-circe bg-main">
    <LandingHeaderNavigation />
    <LandingMainShops />
  </div>
</template>

<script>
import LandingHeaderNavigation from '~/components/LandingHeader/LandingHeaderNavigation.vue'
import LandingMainShops from '~/components/LandingMain/LandingMainShops.vue'

export default {
  components: {
    LandingHeaderNavigation,
    LandingMainShops,
  },
}
</script>

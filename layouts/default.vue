<template>
  <div>
    <LandingHeader />
    <Nuxt />
    <LandingFooter />
  </div>
</template>

<script>
import LandingHeader from '~/components/LandingHeader/LandingHeader.vue'
import LandingFooter from '~/components/LandingFooter/LandingFooter.vue'

export default {
  components: {
    LandingHeader,
    LandingFooter,
  },
}
</script>

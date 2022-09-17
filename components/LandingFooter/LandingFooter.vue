<template>
  <footer class="bg-black">
    <div class="container">
      <div class="pt-12">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="footer-main">
            <p class="footer-title">Компания</p>
            <LandingFooterCompany />
          </div>
          <div class="footer-main">
            <p class="footer-title">Информация</p>
            <LandingFooterInfo />
          </div>
          <div class="footer-main">
            <p class="footer-title">Полезное</p>
            <LandingFooterUseful />
          </div>
          <div class="footer-main">
            <p class="footer-title">Присоединяйтесь</p>
            <LandingFooterSocial />
          </div>
        </div>
      </div>
      <p
        class="text-center text-aluminum font-normal text-xl leading-7 pt-12 pb-6"
      >
        © Pony Express 2021
      </p>
    </div>
  </footer>
</template>

<script>
import LandingFooterCompany from './LandingFooterCompany.vue'
import LandingFooterInfo from './LandingFooterInfo.vue'
import LandingFooterUseful from './LandingFooterUseful.vue'
import LandingFooterSocial from './LandingFooterSocial.vue'

export default {
  components: {
    LandingFooterCompany,
    LandingFooterInfo,
    LandingFooterUseful,
    LandingFooterSocial,
  },
}
</script>

<style scoped>
.footer-main {
  @apply flex flex-col z-50;
}

.footer-title {
  @apply text-white font-bold text-xl leading-7 pb-5;
}
</style>

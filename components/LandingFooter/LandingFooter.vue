<template>
  <footer class="bg-black">
    <div class="container block">
      <div class="pt-12">
        <div class="content flex justify-between">
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

.footer-content {
  @apply text-aluminum font-normal text-base leading-6;
}

.container {
  max-width: 1281px;
  margin: 0 auto;
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

  footer {
    margin-top: 600px;
  }
}

@media (max-width: 640px) {
  .container {
    max-width: 540px;
  }

  footer {
    margin-top: 700px;
  }

  .content {
    @apply flex flex-col;
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

  footer {
    margin-top: 800px;
  }
}

@media (max-width: 395px) {
  .container {
    max-width: 350px;
  }

  footer {
    margin-top: 900px;
  }
}
</style>

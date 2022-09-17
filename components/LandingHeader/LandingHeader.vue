<template>
  <header class="header">
    <div class="container">
      <the-header />
      <div class="pb-[98px] flex flex-col justify-start">
        <p
          class="mb-[12px] text-[28px] md:text-[88px] leading-[32px] md:leading-[93px] font-extrabold tracking-widest uppercase"
        >
          зарубежный<br />sale
        </p>
        <p
          class="max-w-[222px] md:max-w-[256px] mb-[184px] text-[18px] md:text-[26px] leading-[20px] md:leading-[29px] font-bold"
        >
          Выгодные онлайн покупки за рубежом с быстрой доставкой
        </p>
        <button
          class="w-full md:max-w-[322px] px-4 py-2 font-bold text-center rounded-full relative md:text-xl leading-8 text-white bg-greenbasic z-30"
        >
          Получить адрес за рубежом
        </button>
      </div>
      <landing-header-benefits />
    </div>
  </header>
</template>

<script>
import LandingHeaderBenefits from './LandingHeaderBenefits.vue'
import TheHeader from '~/components/TheHeader'

export default {
  components: { LandingHeaderBenefits, TheHeader },
}
</script>

<style scoped>
.header {
  background-image: url('static/img/header-fon.png');
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .header {
    background-size: 170%;
    background-position: 35% -22%;
  }
}
</style>

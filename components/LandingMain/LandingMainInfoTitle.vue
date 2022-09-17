<template>
  <div class="flex flex-row justife-between pt-12 pb-16">
    <div class="main-content flex flex-col justify-start z-50 pb-20">
      <p class="title-text text-white max-w-lg mb-12">
        Предоставляем адреса в США, странах Европы и Японии
      </p>
      <p class="text-t font-bold text-2xl leading-8 max-w-md">
        Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой
        адрес в любой город России
      </p>
    </div>
    <div class="-ml-7 mr-8 z-0 md:z-40">
      <img
        alt=""
        :src="require('@/static/img/info-delivery-1.png')"
        class="img-main relative -mt-12 z-20"
      />
      <img
        alt=""
        :src="require('@/static/img/info-delivery-2.png')"
        class="img-hidden absolute -mt-16 -ml-9 z-30"
      />
    </div>
    <div class="content-hidden flex flex-row pt-64 z-50">
      <img alt="" :src="require('@/static/img/info-country.svg')" />
      <div class="-mt-20 -ml-36">
        <p
          class="font-extrabold text-4xl leading-10 tracking-wide text-white absolute pt-16 pl-7 z-50"
        >
          США
        </p>
        <img
          alt=""
          :src="require('@/static/img/info-country-USA.svg')"
          class="relative z-40"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}

@media (max-width: 1024px) {
  .content-hidden {
    display: none;
  }
}

@media (max-width: 768px) {
  .title-text {
    @apply text-5xl;
  }
}

@media (max-width: 640px) {
  .img-hidden {
    display: none;
  }

  .main-content {
    @apply min-w-full;
  }

  .img-main {
    position: absolute;
    z-index: -9999;
    margin-left: -342px;
  }
}

@media (max-width: 440px) {
  .title-text {
    @apply text-3xl min-w-full;
  }

  .text-t {
    @apply text-lg text-white min-w-full;
  }
}
</style>

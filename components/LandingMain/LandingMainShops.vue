<template>
  <div>
    <div class="flex flex-col border p-6">
      <div
        v-for="shop in shops"
        :key="shop.id"
        class="flex justify-between border-b py-6"
      >
        <div class="flex gap-6 items-center z-50">
          <img :src="shop.img" class="z-50" alt="" />
          <p class="font-bold text-lg leading-5 text-greenbasic">
            {{ shop.title }}
          </p>
        </div>
        <button class="z-50">
          <img :src="require('@/static/img/chevron-down-green.svg')" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    shops: [
      { img: require('~/static/img/shops-levi.svg'), title: 'LEVI’S' },
      { img: require('~/static/img/shops-6pm.svg'), title: '6pm' },
      { img: require('~/static/img/shops-ebay.svg'), title: 'ebay.com' },
      { img: require('~/static/img/shops-levi.svg'), title: 'LEVI’S' },
      { img: require('~/static/img/shops-6pm.svg'), title: '6pm' },
      { img: require('~/static/img/shops-ebay.svg'), title: 'ebay.com' },
      { img: require('~/static/img/shops-levi.svg'), title: 'LEVI’S' },
      { img: require('~/static/img/shops-6pm.svg'), title: '6pm' },
      { img: require('~/static/img/shops-ebay.svg'), title: 'ebay.com' },
    ],
  }),
}
</script>

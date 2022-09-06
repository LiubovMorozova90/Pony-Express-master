<template>
  <div>
    <div>
      <div v-for="shop in shops" :key="shop.id">
        <img :src="shop.img" class="z-50" alt="" />
        <p>{{ shop.title }}</p>
      </div>
      <img :src="require('@/static/img/chevron-down.svg')" alt="" />
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

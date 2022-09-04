<template>
  <div class="section flex justify-between z-50 pb-10">
    <div v-for="item in social" :key="item.id">
      <a href="#"><img :src="item.img" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    social: [
      { img: require('~/static/img/footer-media-vk.svg') },
      { img: require('~/static/img/footer-media-tg.svg') },
      { img: require('~/static/img/footer-media-yt.svg') },
    ],
  }),
}
</script>

<style scoped>
@media (max-width: 640px) {
  .section {
    @apply justify-start gap-2;
  }
}
</style>

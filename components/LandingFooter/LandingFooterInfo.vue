<template>
  <div class="pb-10">
    <div v-for="info in information" :key="info.id" class="footer-content">
      <p v-html="info.title" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    information: [
      { title: '<a href="#">Популярные магазины</a>' },
      { title: '<a href="#">Способы оплаты</a>' },
      { title: '<a href="#">Лимиты</a>' },
      { title: '<a href="#">Ограничения по услуге</a>' },
      { title: '<a href="#">Условия доставки</a>' },
    ],
  }),
}
</script>

<style scoped>
.footer-content {
  @apply text-aluminum font-normal text-base leading-6;
}
</style>
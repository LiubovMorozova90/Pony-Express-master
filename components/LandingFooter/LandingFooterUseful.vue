<template>
  <div class="pb-10">
    <div v-for="item in useful" :key="item.id" class="footer-content">
      <p v-html="item.title" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    useful: [
      { title: '<a href="#">Доставка</a>' },
      { title: '<a href="#">Отслеживание</a>' },
      { title: '<a href="#">Таблица размеров</a>' },
      { title: '<a href="#">Калькулятор</a>' },
    ],
  }),
}
</script>

<style scoped>
.footer-content {
  @apply text-aluminum font-normal text-base leading-6;
}
</style>

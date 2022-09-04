<template>
  <div class="pb-10">
    <div v-for="company in companies" :key="company.id" class="footer-content">
      <p v-html="company.title" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    companies: [
      { title: '<a href="#">Контакты</a>' },
      { title: '<a href="#">Пользовательское соглашение</a>' },
      { title: '<a href="#">Политика конфиденциальности</a>' },
    ],
  }),
}
</script>

<style scoped>
.footer-content {
  @apply text-aluminum font-normal text-base leading-6;
}
</style>

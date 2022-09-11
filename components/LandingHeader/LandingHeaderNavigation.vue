<template>
  <div class="nav-content">
    <div class="nav-btn z-50">
      <TheButton
        :aria-label="isShown ? 'открыть меню' : 'закрыть меню'"
        :btn-img-src="isShown ? 'close-menu.svg' : 'burger-menu.svg'"
        @click.native="isShown = !isShown"
      />
    </div>
    <!-- TODO: `v-if="show"` вот причина, по которой у тебя нифига не работает на десктопе -->
    <!-- TODO: разобраться как получать разрешение экрана через js, `v-if="show"` сделать, например, `v-if="show || isDesktop"` -->
    <div v-if="isShown" class="menu block">
      <ul v-for="nav in navigations" :key="nav.id" class="nav-text">
        <li class="navbar">
          <!-- TODO: это строка, а должно свойство объекта писаться в href -->
          <a href="nav.link">{{ nav.title }}</a>
        </li>
      </ul>
      <button class="btn border text-greenbasic border-greenbasic z-50">
        <a href="#">Личный кабинет</a>
      </button>
    </div>
  </div>
</template>

<script>
import TheButton from '~/components/TheButton.vue'

export default {
  components: { TheButton },
  data: () => ({
    navigations: [
      { link: '#', title: 'Адреса' },
      { link: '#', title: 'Магазины' },
      { link: '#', title: 'Как это работает' },
      { link: '#', title: 'Тарифы' },
      { link: '#', title: 'Услуги' },
      { link: '#', title: 'Доставка' },
    ],
    isShown: false,
  }),
}
</script>

<style>
.navbar {
  @apply inline-block mr-12;
}

.btn {
  @apply text-center text-base font-bold rounded-full px-4 py-2;
}

.nav-text {
  @apply text-lg font-bold z-50;
}

.nav-content {
  @apply flex justify-between items-center mb-32;
}

.nav-btn {
  @apply hidden;
}

@media (max-width: 1024px) {
  .nav-text {
    font-size: 16px;
    padding-left: 10px;
  }

  .navbar {
    margin-right: 20px;
  }

  .btn {
    padding-left: 10px;
    padding-right: 10px;
  }

  .nav-content {
    margin-bottom: 80px;
  }
}

@media (max-width: 768px) {
  .nav-btn {
    @apply block;
  }

  .nav-content {
    margin-top: 40px;
  }

  .menu {
    @apply bg-white absolute mt-36 -ml-36 px-10 py-10;
  }

  .btn {
    max-width: 100%;
    background-color: #00833e;
    color: white;
    margin-top: 10px;
  }
}

@media (max-width: 640px) {
  .menu {
    padding-bottom: 500px;
    margin-top: 600px;
  }
}
</style>

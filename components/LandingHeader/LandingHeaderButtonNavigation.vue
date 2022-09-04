<template>
  <button @click="isShown = !isShown" v-bind="isShown ? img :src="require('@/static/img/burger-menu.svg')" : img :src="require('@/static/img/close-menu.svg')" && isShown ? 'Закрыть меню' : 'Открыть меню'"
class="btn-menu z-50" />
</template>

<script>
export default {
  props: {
    navButton: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isShown: false,
  }),
}
</script>

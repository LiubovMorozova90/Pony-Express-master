<template>
  <button class="z-50" :aria-label="ariaLabel">
    <img
      v-if="btnImgSrc"
      aria-hidden="true"
      :alt="ariaLabel"
      :src="require(`@/static/img/${btnImgSrc}`)"
    />
  </button>
</template>

<script>
export default {
  // TODO: общие компоненты просто кладутся в папку components-common и именуются как, например, TheButton
  // TODO: ты же эту кнопку можешь использовать не только в header - так к чему в названии header или navigation

  props: {
    btnImgSrc: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
}
</script>

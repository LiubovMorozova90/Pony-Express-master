<template>
  <button :aria-label="ariaLabel">
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

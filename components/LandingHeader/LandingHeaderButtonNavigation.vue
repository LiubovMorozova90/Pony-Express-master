<template>
  <!-- TODO: пропсы применяются на компоненте, то есть LandingHeaderNavigation, а не в нем, тут у тебя просто синтаксис пущен звезде полностью -->
  <!-- TODO: не вижу смысла в z-index тут вообще если честно -->
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
    // TODO: что значит имя этого пропса? если сходу не ясно, то это плохое имя
    navButton: {
      type: String,
      default: '',
    },
    btnImgSrc: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  // TODO: почему тут isShown? данный компонент состоянием отображения не управляет
  data: () => ({
    isShown: false,
  }),
}
</script>

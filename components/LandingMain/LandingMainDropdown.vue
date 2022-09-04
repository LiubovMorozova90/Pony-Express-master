<template>
  <div class="grid-text border-b-2 border-lightgreen relative">
    <button class="flex" @click="isShown = !isShown">
      <span class="text-white relative">{{ value }}</span>
      <img
        :src="require('@/static/img/chevron-down.svg')"
        class="main-img absolute ml-96 pl-2 z-40"
        alt=""
      />
    </button>
    <div
      v-show="isShown"
      class="border bg-lightgreen absolute w-full top-full px-2 py-2"
    >
      <p
        v-for="(item, index) in optionsList"
        :key="`item-${index}`"
        class="choice-country relative z-50"
        @click="updateValue(item.title)"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    optionsList: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isShown: false,
  }),
  methods: {
    updateValue(value) {
      this.isShown = false
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped>
.grid-text {
  @apply font-bold text-xl leading-7;
}

.choice-country:hover {
  background-color: #00833e;
  cursor: pointer;
}

@media (max-width: 1280px) {
  .main-img {
    @apply ml-80 pl-0;
  }
}

@media (max-width: 1024px) {
  .main-img {
    @apply ml-64;
  }
}

@media (max-width: 840px) {
  .main-img {
    @apply ml-48;
  }
}

@media (max-width: 768px) {
  .main-img {
    margin-left: 640px;
    margin-top: -30px;
  }
}

@media (max-width: 640px) {
  .main-img {
    margin-left: 500px;
  }
}

@media (max-width: 540px) {
  .main-img {
    margin-left: 400px;
  }
}

@media (max-width: 440px) {
  .main-img {
    margin-left: 370px;
  }
}

@media (max-width: 395px) {
  .main-img {
    margin-left: 300px;
  }
}
</style>

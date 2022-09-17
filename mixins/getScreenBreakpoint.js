export default {
  data() {
    return {
      screenWidth: 0,
    }
  },

  computed: {
    getScreenBreakpoint() {
      if (this.screenWidth < 768) return 'sm'
      else if (this.screenWidth >= 768 && this.screenWidth < 1280) return 'md'
      else if (this.screenWidth >= 1280) return 'xl'
      else if (this.screenWidth >= 1536) return '2xl'
    },

    isDesktop() {
      return this.screenWidth >= 1280
    },

    isNotDesktop() {
      return this.screenWidth < 1280
    },

    isPad() {
      return this.screenWidth >= 768 && this.screenWidth < 1280
    },

    isVerticalPad() {
      return this.screenWidth >= 768 && this.screenWidth < 1024
    },

    isHorizontalPad() {
      return this.screenWidth >= 1024 && this.screenWidth < 1280
    },

    isHorizontalPadOrMore() {
      return this.screenWidth >= 1024
    },

    isLessThanHorizontalPad() {
      return this.screenWidth < 1024
    },

    isMobile() {
      return this.screenWidth < 768
    },

    isNotMobile() {
      return this.screenWidth >= 768
    },
  },

  mounted() {
    this.screenWidth = window.innerWidth
    addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },
  },
}

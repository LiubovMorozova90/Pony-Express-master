<template>
  <div class="content max-w-7xl mb-10">
    <client-only>
      <agile ref="carousel" :options="sliderOptions">
        <div
          v-for="shop in shops"
          :key="shop.id"
          class="slide cursor-pointer w-80 h-64 mb-6"
        >
          <img :src="shop.img" alt="" />
        </div>
      </agile>
    </client-only>
  </div>
</template>

<script>
export default {
  data: () => ({
    sliderOptions: {
      autoplay: false,
      centerMode: true,
      dots: true,
      navButtons: false,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
    shops: [
      { img: require('~/static/img/slider-shop-amazon.svg') },
      { img: require('~/static/img/slider-shop-ebay.svg') },
      { img: require('~/static/img/slider-shop-levi.svg') },
      { img: require('~/static/img/slider-shop-6pm.svg') },
      { img: require('~/static/img/slider-shop-amazon.svg') },
      { img: require('~/static/img/slider-shop-amazon.svg') },
    ],
  }),
}
</script>

<style scoped>
@media (max-width: 1280px) {
  .content {
    max-width: 1100px;
  }

  .slide {
    padding-left: 20px;
  }
}

@media (max-width: 1024px) {
  .content {
    max-width: 900px;
  }

  .slide {
    padding-left: 80px;
  }
}

@media (max-width: 840px) {
  .content {
    max-width: 740px;
  }

  .slide {
    padding-left: 20px;
  }
}

@media (max-width: 768px) {
  .content {
    max-width: 668px;
  }

  .slide {
    padding-left: 190px;
  }
}

@media (max-width: 640px) {
  .content {
    max-width: 540px;
  }

  .slide {
    padding-left: 120px;
  }
}

@media (max-width: 540px) {
  .content {
    max-width: 440px;
  }

  .slide {
    padding-left: 60px;
  }
}

@media (max-width: 440px) {
  .content {
    max-width: 400px;
  }

  .slide {
    padding-left: 40px;
  }
}

@media (max-width: 395px) {
  .content {
    max-width: 350px;
  }

  .slide {
    padding-left: 10px;
  }
}
</style>

<style>
.agile {
  width: 100%;
}

.agile__actions {
  margin-top: 20px;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}

.agile__dot button {
  background-color: #326544;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 16px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.1s;
  width: 16px;
}

.agile__dot button:hover,
.agile__dot button:active {
  background-color: #6cbe37;
}

.agile__dot--current,
.agile__dot--current:hover,
.agile__dot--current button {
  background-color: #6cbe37;
  border-radius: 50%;
}
</style>

<template>
  <div class="slider">
<!--    <splide :options="options">-->
<!--      <splide-slide>-->
<!--        <h2>dgasda</h2>-->
<!--      </splide-slide>-->
<!--      <splide-slide>-->
<!--        <h2>dgasda</h2>-->
<!--      </splide-slide>-->
<!--      <splide-slide>-->
<!--        <h2>dgasda</h2>-->
<!--      </splide-slide>-->
<!--    </splide>-->
    <client-only>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 10"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <img
          class="slide-img"
          :src="getImageUrl(34+n)"
        >
      </swiper-slide>
    </swiper>
    </client-only>
  </div>
</template>

<script>
import {Autoplay, Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay,Navigation, Pagination])
export default {
  components:{
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: '1rem',
      },
    };
  },
  methods:{
    getImageUrl (imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
}
</script>
<style scoped>
.slide-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.test{
  height: 300px;
}
</style>

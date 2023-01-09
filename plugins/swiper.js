
  import { Navigation, Pagination } from 'swiper'

  import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

  // Import Swiper styles
  import 'swiper/swiper-bundle.css'

  SwiperCore.use([Navigation, Pagination])

  export default {
  components: {
  Swiper,
  SwiperSlide
},
  methods: {
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

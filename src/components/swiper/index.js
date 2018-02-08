import Swiper from './swiper.vue'
import SwiperItem from './swiper-item.vue'

export default function install (Vue) {
  Vue.component('tkui-swiper', Swiper)
  Vue.component('tkui-swiper-item', SwiperItem)
}

<template>
  <div class="tkui-slider">
    <div class="tkui-swiper" :style="{height: xheight}">
      <slot></slot>
      <div class="tkui-swiper-item" v-for="(item, index) in list" @click="clickListItem(item)" :data-index="index">
        <a href="javascript:">
          <div class="tkui-img" :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div>
          <p class="tkui-swiper-desc" v-if="showDescMask">{{item.title}}</p>
        </a>
      </div>
    </div>
    <div :class="[dotsClass, 'tkui-indicator', 'tkui-indicator-' + dotsPosition]" v-show="showDots">
      <a href="javascript:" v-for="key in length">
        <i class="tkui-icon-dot" :class="{'active': key - 1 === current}"></i>
      </a>
    </div>
  </div>
</template>

<script>
import Swiper from './swiper.js'

export default {
  created () {
    this.index = this.value || 0
    if (this.index) {
      this.current = this.index
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!(this.list && this.list.length === 0)) {
        this.render(this.index)
      }
      this.xheight = this.getHeight()
    })
  },
  methods: {
    clickListItem (item) {
      this.$emit('on-click-list-item', JSON.parse(JSON.stringify(item)))
    },
    buildBackgroundUrl (url) {
      return `url(${url})`
    },
    render (index = 0) {
      this.swiper && this.swiper.destroy()
      this.swiper = new Swiper({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      })
      .on('swiped', (prev, index) => {
        this.current = index % this.length
        this.index = index % this.length
      })
      if (index > 0) {
        this.swiper.go(index)
      }
    },
    rerender () {
      if (!this.$el) {
        return
      }
      this.$nextTick(() => {
        this.index = this.value || 0
        this.current = this.value || 0
        this.length = this.list.length || this.$children.length
        this.destroy()
        this.render(this.value)
      })
    },
    destroy () {
      this.swiper && this.swiper.destroy()
    },
    getHeight () {
      // when list.length > 0, it's better to set height or ratio
      const hasHeight = parseInt(this.height, 10)

      if (hasHeight) return this.height
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px'
        }
        return '180px'
      }
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: {
      type: Boolean,
      default: false
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0
    }
  },
  watch: {
    list () {
      this.rerender()
    },
    current (currentIndex) {
      this.index = currentIndex
      this.$emit('on-index-change', currentIndex)
    },
    index (val) {
      const _this = this

      if (val !== this.current) {
        this.$nextTick(() => {
          _this.swiper && _this.swiper.go(val)
        })
      }
      this.$emit('input', val)
    },
    value (val) {
      this.index = val
    }
  },
  beforeDestroy () {
    this.destroy()
  }
}

</script>
<style lang="scss" src="./swiper.scss"></style>

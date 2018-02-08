<template>
  <div class="tkui-header" :style="style" :class="{center: center}">
    <div class="left-menu">
      <slot name="left-menu"></slot>
    </div>
    <div class="header-title">
      <slot></slot>
    </div>
    <div class="right-menu">
      <slot name="right-menu"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tkui-header',
    props: {
      background: String,
      color: String,
      center: Boolean
    },
    computed: {
      style: function () {
        return {
          color: this.color,
          'background-color': this.background
        }
      }
    }
  }
</script>

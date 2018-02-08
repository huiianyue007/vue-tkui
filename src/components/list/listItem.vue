<template>
  <div class="tkui-list-item">
    <div class="left" v-if="leftIsNotEmpty">
      <slot name="left"></slot>
    </div>
    <div class="list-item-content">
      <slot></slot>
    </div>
    <div class="right" v-if="rightIsNotEmpty">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tkui-list-item',
    data: function () {
      return {
        leftIsNotEmpty: false,
        rightIsNotEmpty: false
      }
    },
    mounted () {
      this.check()
    },
    beforeUpdate () {
      this.check()
    },
    methods: {
      check: function () {
        this.leftIsNotEmpty = !!this.$slots.left
        this.rightIsNotEmpty = !!this.$slots.right
      }
    }
  }
</script>

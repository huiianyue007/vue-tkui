<template>
  <span class="tkui-toggle" :class="{'checked': value}" @click="toggle">
    <span v-if="type === 'check'" class="tcon tcon-remove tcon-remove--check">
      <span class="tcon-visuallyhidden"></span>
    </span>
    <span v-else :class="type"></span>
  </span>
</template>

<script>
  export default {
    name: 'tkui-toggle',
    props: {
      value: Boolean,
      type: {
        type: String,
        default: 'checkbox'
      }
    },
    methods: {
      toggle: function () {
        this.$emit('input', !this.value)
      }
    }
  }
</script>

<template>
  <tk-cover center middle :hideOnClick="false" :show="show" transition>
    <div class="tkui-dialog">
      <div class="tkui-dialog-body" :class="{center: center}">
        <slot></slot>
      </div>
      <div class="tkui-dialog-action">
        <slot name="action">
          <button class="tkui-dialog-button" @click="close">确定</button>
        </slot>
      </div>
    </div>
  </tk-cover>
</template>

<script>
  export default {
    name: 'tkui-dialog',
    methods: {
      close () {
        this.$emit('update:show', false)
      }
    },
    props: {
      show: Boolean,
      center: Boolean
    }
  }
</script>

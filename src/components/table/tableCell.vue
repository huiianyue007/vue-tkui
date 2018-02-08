<template>
  <td class="tkui-table-cell" :style="cellStyle">
    <div class="tkui-table-cell-container" :style="containerStyle">
      <slot></slot>
    </div>
  </td>
</template>

<script>
  export default {
    name: 'tkui-table-cell',
    computed: {
      containerStyle: function () {
        return {
          padding: this.padding ? this.padding : false
        }
      },
      cellStyle: function () {
        return {
          width: this.col ? this.col * 1000 + 'px' : false
        }
      }
    },
    props: {
      padding: String,
      col: [String, Number]
    }
  }
</script>

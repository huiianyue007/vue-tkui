<template>
  <tr class="tkui-table-title">
    <table-cell colspan="1000">
      <slot></slot>
    </table-cell>
  </tr>
</template>

<script>
  import tableCell from './tableCell.vue'
  export default {
    name: 'tkui-table-title',
    components: {
      tableCell
    }
  }
</script>

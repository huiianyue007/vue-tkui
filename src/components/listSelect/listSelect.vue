<template>
  <list class="tkui-list-select">
    <list-item v-for="show, name in items" :key="name" @click.native="select(name)" :class="{border: border, divider: divider}">
      {{show}}
      <toggle type="check" value v-if="isChecked(name)" slot="right"></toggle>
    </list-item>
  </list>
</template>

<script>
  import list from '../list/list.vue'
  import listItem from '../list/listItem.vue'
  import toggle from '../toggle/toggle.vue'
  export default {
    name: 'tkui-list-select',
    methods: {
      select: function (name) {
        let value
        if (this.type === 'checkbox') {
          value = this.value.slice()
          let index = value.indexOf(name)
          if (index === -1) {
            value.push(name)
          } else {
            value.splice(index, 1)
          }
        } else {
          value = name
        }
        this.updateValue(value)
      },
      isChecked: function (name) {
        if (this.type === 'checkbox') {
          return this.value.indexOf(name) > -1
        }
        return this.value === name
      },
      updateValue: function (value) {
        this.$emit('input', value)
      }
    },
    props: {
      value: [String, Array],
      items: {
        type: Object,
        default: () => {}
      },
      type: {
        type: String,
        default: 'checkbox'
      },
      border: Boolean,
      divider: Boolean
    },
    components: {
      list,
      listItem,
      toggle
    }
  }
</script>

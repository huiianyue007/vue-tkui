<template>
  <list-item class="tkui-list-select" @click.native="show()">
    {{label}}
    <tk-cover transition bottom :show="isShow"  @change="changeCover">
      <div class="picker-wraper">
        <tk-flex class="picker-action" right>
          <div class="action-button" @click="select">确定</div>
        </tk-flex>
        <picker :value="value" :regionFilter="regionFilter" :items="items" :type="type" @input="onChange" ref="picker"></picker>
      </div>
    </tk-cover>
    <div slot="right">{{display}}</div>
  </list-item>
</template>

<script>
  import listItem from '../list/listItem.vue'
  import picker from '../picker/picker.vue'
  export default {
    name: 'tkui-list-picker',
    data: function () {
      return {
        isShow: false
      }
    },
    computed: {
      display: function () {
        if (this.value) {
          if (this.type === 'region') {
            let regionName = this.$tkRegions.getFullName(this.value)
            return regionName || this.emptyMessage
          }
          return this.getDisplay(this.value, this.items)
        }
        return this.emptyMessage
      }
    },
    methods: {
      getDisplay: function (value, items) {
        if (typeof value === 'string') {
          if (Array.isArray(items)) {
            return typeof items[0] === 'object' ? items[0][value] : value
          }
          return items[value]
        } else if (Array.isArray(value)) {
          let rt = []
          for (let i in value) {
            rt.push(this.getDisplay(value[i], items[i]))
          }
          return rt.join(' ')
        }
        return value
      },
      show: function () {
        this.isShow = true
      },
      select: function () {
        let value = this.$refs.picker.getValue()
        this.$emit('input', value)
        this.$emit('selected', value)
        this.isShow = false
      },
      onChange: function (val) {
        this.$emit('input', val)
      },
      changeCover: function (status) {
        this.isShow = status
      }
    },
    props: {
      label: {
        type: String,
        required: true
      },
      emptyMessage: String,
      regionFilter: Object,
      value: [String, Array],
      items: [Array, Object],
      type: String
    },
    components: {
      listItem,
      picker
    }
  }
</script>

<template>
  <picker class="tkui-picker" :data="data" :value="xvalue" @on-change="onChange" :columns="columns" ref="picker"></picker>
</template>
<script>
  import vuxPicker from './vuxPicker.vue'
  export default {
    data: function () {
      return {
        columns: 0
      }
    },
    components: {
      picker: vuxPicker
    },
    computed: {
      data: function () {
        if (this.type === 'region') {
          return this.region
        }
        return this.formatItems()
      },
      region: function () {
        if (this.type !== 'region') return []
        let data = []
        let [ hasProvince, hasCity, hasArea ] = [0, 0, 0]
        for (let i in this.$tkRegions.province) {
          let item = this.$tkRegions.province[i]
          if (!this.filterRegion(item.id)) continue
          item.value = item.id
          item.parent = 0
          data.push(item)
          hasProvince = 1
        }
        for (let i in this.$tkRegions.city) {
          let item = this.$tkRegions.city[i]
          if (!this.filterRegion(item.id)) continue
          item.value = item.id
          item.parent = hasProvince ? this.$tkRegions.getParentId(item.id) : 0
          data.push(item)
          hasCity = 1
        }
        for (let i in this.$tkRegions.area) {
          let item = this.$tkRegions.area[i]
          if (!this.filterRegion(item.id)) continue
          item.value = item.id
          item.parent = hasCity ? this.$tkRegions.getParentId(item.id) : 0
          data.push(item)
          hasArea = 1
        }
        this.columns = hasProvince + hasCity + hasArea
        return data
      },
      xvalue: function () {
        if (!this.value) return []
        if (this.type === 'region') {
          let val = this.value
          let arr = [val]
          for (let i = 0; i < this.columns - 1; i++) {
            val = this.$tkRegions.getParentId(val)
            if (val) {
              arr.unshift(val)
            }
          }
          return arr
        }
        return this.isSingle ? [this.value] : this.value
      },
      isSingle: function () {
        if (this.items && !this.type) {
          if (!Array.isArray(this.items)) return true
          if (Array.isArray(this.items) && this.items.length === 1) return true
        }
        return false
      }
    },
    methods: {
      getValue: function () {
        let val = this.$refs.picker.getValue()
        if (this.type === 'region') {
          val = val.pop()
        }
        val = this.isSingle ? val[0] : val
        return val
      },
      filterRegion: function (value) {
        if (this.regionFilter) {
          if (this.regionFilter.root) {
            let root = this.regionFilter.root
            let parentId = this.$tkRegions.getParentId(value)
            if (root !== value && parentId !== root && this.$tkRegions.getParentId(parentId) !== root) {
              return false
            }
          }
        }
        return true
      },
      formatItems: function () {
        let items = this.items
        if (!Array.isArray(items)) {
          items = [items]
        }
        for (let j in items) {
          let item = items[j]
          if (!Array.isArray(item)) {
            let array = []
            for (let i in item) {
              array.push({
                value: i,
                name: item[i]
              })
            }
            items[j] = array
          }
        }
        return items
      },
      onChange: function (val) {
        if (this.type === 'region') {
          val = val.pop()
        }
        val = this.isSingle ? val[0] : val

        this.$emit('input', val)
      }
    },
    props: {
      regionFilter: Object,
      items: [Array, Object],
      value: [String, Array],
      type: String
    }
  }
</script>
<style>
  .tkui-picker{
    width: 100%;
  }
</style>

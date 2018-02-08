import List from './list.vue'
import ListItem from './listItem.vue'

export default function install (Vue) {
  Vue.component('tkui-list', List)
  Vue.component('tkui-list-item', ListItem)
}

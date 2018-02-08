import Dialog from './dialog.vue'
import Alert from './alert.vue'

export default function install (Vue) {
  Vue.component('tkui-dialog', Dialog)
  Vue.component('tkui-alert', Alert)
}

import Table from './table.vue'
import TableHeader from './tableHeader.vue'
import TableBody from './tableBody.vue'
import TableTitle from './tableTitle.vue'
import TbaleRow from './tableRow.vue'
import TableCell from './tableCell.vue'

export default function install (Vue) {
  Vue.component('tkui-table', Table)
  Vue.component('tkui-table-header', TableHeader)
  Vue.component('tkui-table-body', TableBody)
  Vue.component('tkui-table-title', TableTitle)
  Vue.component('tkui-table-row', TbaleRow)
  Vue.component('tkui-table-cell', TableCell)

}

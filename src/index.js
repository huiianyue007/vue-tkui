import swiper from './components/swiper'
import tab from './components/tab'
import header from './components/header'
import button from './components/button'
import list from './components/list'
import tag from './components/tag'
import table from './components/table'
import input from './components/input'
import toggle from './components/toggle'
import listSelect from './components/listSelect'
import picker from './components/picker'
import listPicker from './components/listPicker'
import dialog from './components/dialog'

const options = {
  header,
  button,
  swiper,
  tab,
  list,
  tag,
  table,
  input,
  picker,
  toggle,
  listSelect,
  listPicker,
  dialog
}

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default options

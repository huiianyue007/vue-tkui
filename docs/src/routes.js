/* Root */
const Introduction = (r) => require.ensure([], () => r(require('./pages/Introduction')), 'base')
const Error404 = (r) => require.ensure([], () => r(require('./pages/Error')), 'base')

/* Components */
const Header = (r) => require.ensure([], () => r(require('./pages/components/Header.vue')), 'header')
const Button = (r) => require.ensure([], () => r(require('./pages/components/Button.vue')), 'button')
const List = (r) => require.ensure([], () => r(require('./pages/components/List.vue')), 'list')
const Tag = (r) => require.ensure([], () => r(require('./pages/components/Tag.vue')), 'tag')
const Table = (r) => require.ensure([], () => r(require('./pages/components/Table.vue')), 'table')
const Input = (r) => require.ensure([], () => r(require('./pages/components/Input.vue')), 'input')
const Toggle = (r) => require.ensure([], () => r(require('./pages/components/Toggle.vue')), 'toggle')
const ListSelect = (r) => require.ensure([], () => r(require('./pages/components/ListSelect.vue')), 'listSelect')
const ListPicker = (r) => require.ensure([], () => r(require('./pages/components/ListPicker.vue')), 'listPicker')
const Dialog = (r) => require.ensure([], () => r(require('./pages/components/Dialog.vue')), 'dialog')

/* Theme */
const Theme = (r) => require.ensure([], () => r(require('./pages/theme/index.vue')), 'theme')

const main = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  }
]

const components = [
  {
    name: 'list',
    path: '/components/list',
    component: List
  }, {
    name: 'header',
    path: '/components/header',
    component: Header
  }, {
    name: 'button',
    path: '/components/button',
    component: Button
  }, {
    name: 'tag',
    path: '/components/tag',
    component: Tag
  }, {
    name: 'table',
    path: '/components/table',
    component: Table
  }, {
    name: 'input',
    path: '/components/input',
    component: Input
  }, {
    name: 'listPicker',
    path: '/components/list-picker',
    component: ListPicker
  }, {
    name: 'toggle',
    path: '/components/toggle',
    component: Toggle
  }, {
    name: 'listSelect',
    path: '/components/list-select',
    component: ListSelect
  }, {
    name: 'dialog',
    path: '/components/dialog',
    component: Dialog
  }
]

const theme = [
  {
    name: 'theme',
    path: '/theme',
    component: Theme
  }
]

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
]

export default [].concat(main, components, theme, error)

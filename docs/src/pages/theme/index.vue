<template>
  <page-content page-title="主题定制">
    <docs-component>
      <div class="docs">
        <h3 class="md-title">保存配置</h3>
        <tk-flex middle>
          <md-input-container class="fill">
            <label>配置名</label>
            <md-input v-model="configName"></md-input>
          </md-input-container>
          <md-button class="md-primary md-raised" @click.native="addConfig">添加</md-button>
        </tk-flex>
        <md-dialog-confirm
          :md-content-html="confirmDeleteMessage"
          md-ok-text="确认"
          md-cancel-text="取消"
          @close="confirmDeleteClose"
          ref="confirmDeleteDialog">
        </md-dialog-confirm>
        <div class="chip-wrap">
          <md-chip md-deletable v-for="value,name in configHistory" :key="name" :class="{active : currentConfig === name}" @delete="configOnDelete(name)"><span @click="changeConfig(name)">{{name}}</span></md-chip>
        </div>
        <h3 class="md-title">定制主题变量</h3>
        <div class="chip-wrap">
          <md-chip v-for="name in list" :key="name" :class="{active : current === name}" @click.native="current = name">{{name}}</md-chip>
        </div>
        <div class="config-form">
          <md-input-container class="md-input-info" v-for="variable in currentVariables" :key="variable.name">
            <label>{{variable.name}}</label>
            <md-input v-model="variables[variable.name]"></md-input>
            <span class="input-message">{{variable.description}}</span>
            <span class="inherit-message">
              <span v-for="val in variable.inherit">
                < <b>{{val}}</b> ({{display(val)}})
              </span>
            </span>
          </md-input-container>
        </div>
      </div>
      <div slot="example" class="demo custom">
        <div class="import">
          <md-button class="md-raised md-primary" @click.native="open">获取SASS变量</md-button>
        </div>

        <md-whiteframe md-elevation="4" class="demo-card tkui">
          <div v-if="current === 'common'">
            <div class="block">
              <div>普通文字</div>
            </div>
            <div class="block">
              <div class="caption">title</div>
              <div class="title">标题文字</div>
            </div>
            <div class="block">
              <div class="caption">caption</div>
              <div class="caption">副文本</div>
            </div>
            <div class="block">
              <div class="caption">headline</div>
              <div class="headline">大标题</div>
            </div>
            <div class="block">
              <div class="caption">subhead</div>
              <div class="subhead">副标题</div>
            </div>
            <div class="block">
              <div class="caption">primary</div>
              <div class="primary">主色</div>
            </div>
            <div class="block">
              <div class="caption">primary-background</div>
              <div class="primary-background">主色背景</div>
            </div>
            <div class="block">
              <div class="caption">accent</div>
              <div class="accent">衬色</div>
            </div>
            <div class="block">
              <div class="caption">accent-background</div>
              <div class="accent-background">衬色背景</div>
            </div>
            <div class="block">
              <div class="caption">danger</div>
              <div class="danger">警告色</div>
            </div>
          </div>
          <div v-else-if="current === 'header'">
            <tkui-header center>
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              header
              <div slot="right-menu">
                <tkui-button class="icon">
                  <tk-icon>star_border</tk-icon>
                </tkui-button>
                <tkui-button class="icon">
                  <tk-icon>share</tk-icon>
                </tkui-button>
              </div>
            </tkui-header>
          </div>
          <div v-else-if="current === 'button'">
            <div class="block">
              <tkui-button class="small">普通按钮</tkui-button>
              <tkui-button class="small border">边框按钮</tkui-button>
              <tkui-button class="small raised">raised按钮</tkui-button>
              <tkui-button class="small rounded">圆角按钮</tkui-button>
              <tkui-button class="small icon"><tk-icon>setup</tk-icon></tkui-button>
            </div>
            <div class="block">
              <tkui-button class="">普通按钮</tkui-button>
              <tkui-button class="border">边框按钮</tkui-button>
              <tkui-button class="raised">raised按钮</tkui-button>
              <tkui-button class="rounded">圆角按钮</tkui-button>
              <tkui-button class="icon"><tk-icon>setup</tk-icon></tkui-button>
            </div>
            <div class="block">
              <tkui-button class="big">普通按钮</tkui-button>
              <tkui-button class="big border">边框按钮</tkui-button>
              <tkui-button class="big raised">raised按钮</tkui-button>
              <tkui-button class="big rounded">圆角按钮</tkui-button>
              <tkui-button class="big icon"><tk-icon>setup</tk-icon></tkui-button>
            </div>
          </div>
          <div v-else-if="current === 'list'">
            <tkui-list class="small">
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                小尺寸
              </tkui-list-item>
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                小尺寸
              </tkui-list-item>
            </tkui-list>
            <br/><br/>
            <tkui-list>
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                普通尺寸
              </tkui-list-item>
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                普通尺寸
              </tkui-list-item>
            </tkui-list>
            <br/><br/>
            <tkui-list class="big">
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                大尺寸
              </tkui-list-item>
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                大尺寸
              </tkui-list-item>
            </tkui-list>
          </div>
          <div v-else-if="current === 'tag'">
            <div>
              <tkui-tag class="small">标签1</tkui-tag>
              <tkui-tag class="">标签2</tkui-tag>
              <tkui-tag class="big">标签3</tkui-tag>
            </div>
            <div>
              <tkui-tag class="primary">标签1</tkui-tag>
              <tkui-tag class="accent">标签2</tkui-tag>
              <tkui-tag class="danger">标签3</tkui-tag>
            </div>
          </div>
          <div v-else-if="current === 'table'">
            <tkui-table>
              <tkui-table-header>
                <tkui-table-row class="middle">
                  <tkui-table-cell>姓名</tkui-table-cell>
                  <tkui-table-cell>年龄</tkui-table-cell>
                  <tkui-table-cell>学号</tkui-table-cell>
                  <tkui-table-cell>性别</tkui-table-cell>
                  <tkui-table-cell>分数</tkui-table-cell>
                </tkui-table-row>
              </tkui-table-header>
              <tkui-table-body>
                <tkui-table-title>3年1班</tkui-table-title>
                <tkui-table-row>
                  <tkui-table-cell>张三</tkui-table-cell>
                  <tkui-table-cell class="right">13</tkui-table-cell>
                  <tkui-table-cell class="right">73</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">87</tkui-table-cell>
                </tkui-table-row>
                <tkui-table-row>
                  <tkui-table-cell>李四</tkui-table-cell>
                  <tkui-table-cell class="right">14</tkui-table-cell>
                  <tkui-table-cell class="right">87</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">73</tkui-table-cell>
                </tkui-table-row>
                <tkui-table-title>3年2班</tkui-table-title>
                <tkui-table-row class="border">
                  <tkui-table-cell>王五</tkui-table-cell>
                  <tkui-table-cell class="right">13</tkui-table-cell>
                  <tkui-table-cell class="right">12</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">88</tkui-table-cell>
                </tkui-table-row>
                <tkui-table-row class="border">
                  <tkui-table-cell>赵六</tkui-table-cell>
                  <tkui-table-cell class="right">12</tkui-table-cell>
                  <tkui-table-cell class="right">49</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">93</tkui-table-cell>
                </tkui-table-row>
              </tkui-table-body>
            </tkui-table>
          </div>
          <div v-else-if="current === 'input'">
            <tkui-input v-model="value"><tk-icon slot="before">mobile_phone</tk-icon><tkui-button slot="after" class="icon"><tk-icon>close</tk-icon></tkui-button></tkui-input>
            <tkui-input v-model="value" label="普通" infoMessage="infoMessage"></tkui-input>
            <tkui-input v-model="value" label="错误" errorMessage="errorMessage"></tkui-input>
            <tkui-input type="checkbox" v-model="checkValue" :items="items" label="多选" placeHolder="placeHolder"></tkui-input>
          </div>
        </md-whiteframe>
      </div>
    </docs-component>
    <md-dialog ref="dialog">
      <md-dialog-title>复制下面的数据</md-dialog-title>
      <md-dialog-content>
        <textarea style="width: 100%" rows=10 class="json-text">{{variablesText}}</textarea>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog">关闭</md-button>
      </md-dialog-actions>
    </md-dialog>
  </page-content>
</template>

<script>
  import common from '../../../../src/sass/theme.json'
  import header from '../../../../src/components/header/theme.json'
  import button from '../../../../src/components/button/theme.json'
  import list from '../../../../src/components/list/theme.json'
  import tag from '../../../../src/components/tag/theme.json'
  import table from '../../../../src/components/table/theme.json'
  import input from '../../../../src/components/input/theme.json'
  import _variables from 'mk-sass-variables-loader?all!../../../../src/sass/all.scss'
  import baseSass from 'sass-themes-loader?dynamic!../../../../src/sass/all.scss'
  import dynamicThemeManager from 'sass-themes-loader/dist/dynamicThemeManager'
  dynamicThemeManager.setBaseCss(baseSass)

  export default {
    data: function () {
      let configs = {
        common,
        header,
        button,
        list,
        tag,
        table,
        input
      }

      let inherits = {}
      let variables = {}

      for (let item in configs) {
        let config = configs[item]
        for (let variable of config) {
          inherits[variable.name] = variable.inherit
          if (variable.inherit.length === 0 && _variables[variable.name]) {
            variables[variable.name] = _variables[variable.name]
          } else {
            variables[variable.name] = null
          }
        }
      }
      return {
        list: Object.keys(configs),
        configs: configs,
        baseVariables: Object.assign({}, variables),
        variables: variables,
        importVariables: {},
        registerVariables: {},
        current: 'common',
        inherits: inherits,
        configHistory: {},
        currentConfig: '',
        configName: '',
        confirmConfigName: '',
        value: '',
        checkValue: ['a'],
        items: {
          a: '选项A',
          b: '选项B',
          c: '选项C'
        }
      }
    },
    computed: {
      variablesText: function () {
        let string = ''
        for (let cls in this.configs) {
          string += '/*******************************\r             ' + cls + '\r*******************************/\r'
          for (let item of this.configs[cls]) {
            string += '$' + item.name + ':' + this.importVariables[item.name] + '; //' + item.description + '\r'
          }
          string += '\r\r'
        }
        return string
      },
      currentVariables: function () {
        return this.configs[this.current]
      },
      confirmDeleteMessage: function () {
        return '确定要删除<b>' + this.confirmConfigName + '</b>这个配置项吗？'
      }
    },
    watch: {
      variables: {
        handler: function () {
          this.importVariables = {}
          this.registerVariables = {}
          for (let name in this.variables) {
            if (this.variables[name] && this.variables[name] !== this.baseVariables[name]) {
              this.registerVariables[name] = this.importVariables[name] = this.variables[name]
            } else if (this.inherits[name].length > 0) {
              let inherits = this.inherits[name].slice(0)
              inherits.reverse()
              for (let inherit of inherits) {
                if (this.variables[inherit] && this.variables[inherit] !== this.baseVariables[inherit]) {
                  this.registerVariables[name] = this.variables[inherit]
                }
              }
              if (this.registerVariables[name]) {
                this.importVariables[name] = this.registerVariables[name]
              }
            } else if (_variables[name]) {
              this.importVariables[name] = _variables[name]
            }
          }
          dynamicThemeManager.registerTheme('custom', this.registerVariables, {
            removeThemeClass: true
          })
          let _configHistory = {}
          _configHistory[this.currentConfig] = Object.assign({}, this.variables)
          this.configHistory = Object.assign({}, this.configHistory, _configHistory)
        },
        deep: true
      },
      configHistory: {
        handler: function () {
          window.localStorage.setItem('configHistory', JSON.stringify(this.configHistory))
        },
        deep: true
      }
    },
    methods: {
      display: function (val) {
        return this.variables[val]
      },
      closeDialog: function () {
        this.$refs.dialog.close()
      },
      open: function () {
        this.$refs.dialog.open()
      },
      changeConfig: function (name) {
        this.currentConfig = name
        this.variables = Object.assign({}, this.baseVariables, this.configHistory[name])
      },
      configOnDelete: function (name) {
        this.confirmConfigName = name
        this.$refs.confirmDeleteDialog.open()
      },
      deleteConfig: function (name) {
        delete this.configHistory[name]
        if (name === this.currentConfig) {
          if (Object.keys(this.configHistory).length === 0) {
            this.configHistory.default = {}
          }
          let firstConfig = Object.keys(this.configHistory)[0]
          this.changeConfig(firstConfig)
        }
      },
      addConfig: function () {
        if (this.configName) {
          this.$set(this.configHistory, this.configName, {})
          this.changeConfig(this.configName)
          this.configName = ''
        }
      },
      confirmDeleteClose: function (type) {
        if (type === 'ok') {
          this.deleteConfig(this.confirmConfigName)
        }
      }
    },
    mounted: function () {
      let store = window.localStorage.getItem('configHistory')
      if (store) {
        let json = JSON.parse(store)
        for (let name in json) {
          this.configHistory[name] = json[name]
        }
      }

      if (Object.keys(this.configHistory).length === 0) {
        this.configHistory.default = {}
      }
      let name = Object.keys(this.configHistory)[0]
      this.currentConfig = name
      this.changeConfig(name)
    }
  }
</script>

<style lang="scss" scoped>
  .md-headline{
    margin-top: 0 !important;
    border-top:none !important;
  }
  .config {
    padding-right: 8px;
    flex: 1 1 45%;

    @media (max-width: 1024px) {
      padding: 0;
      flex: none;
      order: 2;
    }
  }
  .md-chip{
    margin:8px 8px 8px 0;

    &.active{
      background-color: #009688;
      color:white;
    }
  }
  .config-form {
    margin-top: 32px;
  }
  .md-input-info{
    margin-bottom: 48px;
  }
  .md-input-container.md-input-info{
    & .input-message, & .inherit-message{
      opacity: 1;
      transform: translateZ(0);
      display: block!important;
      transition: all .3s cubic-bezier(.55,0,.55,.2);
      height: 20px;
      position: absolute;
      bottom: -22px;
      font-size: 12px;
    }
    & .input-message{
      left: 0;
    }
    & .inherit-message{
      right:0;
      font-size: 14px;
    }
  }
  .demo .md-whiteframe{
    padding: 16px;
    min-height: 160px;
  }
  .docs,.custom{
    height: 100%;
    overflow: auto;
  }
  .custom{
    padding-left:8px;
    padding-right:8px;
  }
  .import{
    text-align: right;
    margin-bottom:16px;
  }
  .block{
    margin: 20px 0;
    div:first-child{
      margin-bottom:4px;
    }
  }
  .accent-background,
  .primary-background{
    padding:8px 0;
    color: white;
  }
</style>

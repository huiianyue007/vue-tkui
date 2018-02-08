<template>
  <page-content page-title="组件 - 模态框">
    <docs-component>
      <div slot="description">
        <p>模态框</p>
      </div>

      <div slot="api">
        <api-table name="tkui-dialog">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>show</md-table-cell>
                <md-table-cell>是否显示模态框</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>center</md-table-cell>
                <md-table-cell>是否居中显示内容</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="tkui-alert">
          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>参数</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>
                  message <code>String</code> 显示的提示信息<br/>
                  options <code>Object</code> 参数，目前仅支持 onClose
                </md-table-cell>
                <md-table-cell>打开alert模态框</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="默认效果">
          <div class="box" slot="demo">
            <tkui-dialog :show.sync="show" center>
              <div class="subhead">
                提示信息
              </div>
            </tkui-dialog>
            <tkui-button class="raised" @click.native="open">打开</tkui-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-dialog :show.sync=&quot;show&quot; center&gt;
              &lt;div class=&quot;subhead&quot;&gt;
              提示信息
              &lt;/div&gt;
              &lt;/tkui-dialog&gt;
              &lt;tkui-button class=&quot;raised&quot; @click.native=&quot;open&quot;&gt;打开&lt;/tkui-button&gt;
            </code-block>
            <code-block lang="javascript">
              data () {
                return {
                  show: false
                }
              },
              methods: {
                open () {
                  this.show = true
                }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="设置按钮">
          <div class="box" slot="demo">
            <tkui-dialog :show.sync="show" center>
              <div class="subhead">
                提示信息
              </div>
              <template slot="action">
                <button class="tkui-dialog-button" @click="close">取消</button>
                <button class="tkui-dialog-button primary" @click="close">确定</button>
              </template>
            </tkui-dialog>
            <tkui-button class="raised" @click.native="open">打开</tkui-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-dialog :show.sync=&quot;show&quot; center&gt;
              &lt;div class=&quot;subhead&quot;&gt;
              提示信息
              &lt;/div&gt;
              &lt;template slot=&quot;action&quot;&gt;
              &lt;button class=&quot;tkui-dialog-button&quot; @click=&quot;close&quot;&gt;取消&lt;/button&gt;
              &lt;button class=&quot;tkui-dialog-button primary&quot; @click=&quot;close&quot;&gt;确定&lt;/button&gt;
              &lt;/template&gt;
              &lt;/tkui-dialog&gt;
              &lt;tkui-button class=&quot;raised&quot; @click.native=&quot;open&quot;&gt;打开&lt;/tkui-button&gt;
            </code-block>
            <code-block lang="javascript">
              data () {
              return {
              show: false
              }
              },
              methods: {
              open () {
              this.show = true
              },
              close () {
                this.show = false
              }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="alert">
          <div class="box" slot="demo">
            <tkui-alert ref="alert"></tkui-alert>
            <tkui-button class="raised" @click.native="openAlert">打开</tkui-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-alert ref=&quot;alert&quot;&gt;&lt;/tkui-alert&gt;
              &lt;tkui-button class=&quot;raised&quot; @click.native=&quot;openAlert&quot;&gt;打开&lt;/tkui-button&gt;
            </code-block>
            <code-block lang="javascript">
              methods: {
              openAlert () {
              this.$refs.alert.open('一句提示信息', {onClose: this.callback})
              },
              callback () {
              window.alert('关闭了alert模态框')
              }
              }
            </code-block>
          </div>
        </example-box>


      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      open () {
        this.show = true
      },
      close () {
        this.show = false
      },
      openAlert () {
        this.$refs.alert.open('一句提示信息', {onClose: this.callback})
      },
      callback () {
        window.alert('关闭了alert模态框')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    min-height: 260px;
  }
</style>

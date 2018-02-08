<template>
  <page-content page-title="组件 - 列表下拉选择器">
    <docs-component>
      <div slot="description">
        <p>列表下拉选择器</p>
      </div>

      <div slot="api">
        <api-table name="md-avatar">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>label</md-table-cell>
                <md-table-cell>标题</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>emptyMessage</md-table-cell>
                <md-table-cell>选项为空时的提示语</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>value</md-table-cell>
                <md-table-cell>选择的值</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>items</md-table-cell>
                <md-table-cell>供选择的选项，<code>Array</code>或<code>Object</code>， 单列格式为[值, 值, 值] 或 [ 值 =》 显示值 ]， 多列格式为[单列， 单列]</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell>选择器类型，可选值有[region]</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell>选择器类型，可选值有[region]</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>regionFilter</md-table-cell>
                <md-table-cell>地区结果筛选器，格式为{ 筛选条件 =》 筛选值 }， 目前筛选条件仅支持root，代表地区选择的起始范围</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>参数</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>selected</md-table-cell>
                <md-table-cell>value <code>String</code> 选择的值</md-table-cell>
                <md-table-cell>选定一个选项后触发</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="单列选择器">
          <div class="demo-wraper" slot="demo">
            <tk-flex center>
              <tk-container class="picker-container">
                <tkui-header>单列选择器</tkui-header>
                <tkui-list>
                  <tkui-list-picker v-model="value1" :items="list1" label="选择一个字母"></tkui-list-picker>
                </tkui-list>
              </tk-container>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-picker v-model=&quot;value1&quot; :items=&quot;list1&quot; label=&quot;选择一个字母&quot;&gt;&lt;/tkui-list-picker&gt;
              &lt;/tkui-list&gt;
            </code-block>
            <code-block lang="javascript">
              data: () => {
                return {
                  value1: null,
                  list1: {
                    a: '字母A',
                    b: '字母B',
                    c: '字母C'
                  }
                }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="多列选择器">
          <div class="demo-wraper" slot="demo">
            <tk-flex center>
              <tk-container class="picker-container">
                <tkui-header>多列选择器</tkui-header>
                <tkui-list>
                  <tkui-list-picker v-model="value2" :items="list2" label="选择一个日期"></tkui-list-picker>
                </tkui-list>
              </tk-container>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-picker v-model=&quot;value2&quot; :items=&quot;list2&quot; label=&quot;选择一个日期&quot;&gt;&lt;/tkui-list-picker&gt;
              &lt;/tkui-list&gt;
            </code-block>
            <code-block lang="javascript">
              data: () => {
                return {
                  value2: null,
                  list2: [
                    [
                      '第一周',
                      '第二周',
                      '第三周',
                      '第四周'
                    ],
                    [
                      '周一',
                      '周二',
                      '周三',
                      '周四',
                      '周五',
                      '周六',
                      '周日'
                    ]
                  ],
                }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="城市选择器">
          <div class="demo-wraper" slot="demo">
            <tk-flex center>
              <tk-container class="picker-container">
                <tkui-header>城市选择器</tkui-header>
                <tkui-list>
                  <tkui-list-picker v-model="region" type="region" label="城市" :regionFilter="regionFilter" emptyMessage="选择一个城市"></tkui-list-picker>
                </tkui-list>
              </tk-container>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-picker v-model=&quot;region&quot; type=&quot;region&quot; label=&quot;城市&quot; :regionFilter=&quot;regionFilter&quot; emptyMessage=&quot;选择一个城市&quot;&gt;&lt;/tkui-list-picker&gt;
              &lt;/tkui-list&gt;
            </code-block>
            <code-block lang="javascript">
              data: () => {
                return {
                  region: '',
                  regionFilter: {
                    root: '130000'
                  }
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
  import TkuiHeader from '../../../../src/components/header/header.vue'

export default {
    components: {TkuiHeader},
    data: function () {
      return {
        index: 0,
        value1: null,
        list1: {
          a: '字母A',
          b: '字母B',
          c: '字母C'
        },
        value2: null,
        list2: [
          [
            '第一周',
            '第二周',
            '第三周',
            '第四周'
          ],
          [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'

          ]
        ],
        region: '',
        regionFilter: {
          root: '130000'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tkui-header{
    margin:8px 0;
    background-color: #009688;
    color: white;
  }
  .picker-container{
    height: 540px;
    width: 360px;
  }
</style>

<template>
  <page-content page-title="组件 - 列表选择器">
    <docs-component>
      <div slot="description">
        <p>该组件的样式与列表组件一致，列表组件的class均能使用。</p>
      </div>

      <div slot="api">
        <api-table name="tkui-list-select">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>value</md-table-cell>
                <md-table-cell>输入框的值</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>items</md-table-cell>
                <md-table-cell>多选或单选组件的选项，<code>object</code> 格式为{value=>display}</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell>选择类型，可选值checkbox, radio</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>border</md-table-cell>
                <md-table-cell>为list-item添加border样式</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>divider</md-table-cell>
                <md-table-cell>为list-item添加divider样式</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="多选">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list-select type="checkbox" v-model="checkValue" :items="items"></tkui-list-select>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list-select type=&quot;checkbox&quot; v-model=&quot;checkValue&quot; :items=&quot;items&quot;&gt;&lt;/tkui-list-select&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="单选">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list-select type="radio" v-model="radioValue" :items="items"></tkui-list-select>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list-select type=&quot;radio&quot; v-model=&quot;radioValue&quot; :items=&quot;items&quot;&gt;&lt;/tkui-list-select&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  import TkuiListSelect from '../../../../src/components/listSelect/listSelect.vue'

  export default {
    components: {TkuiListSelect},
    data: function () {
      return {
        value: '',
        items: {
          a: '选项A',
          b: '选项B',
          c: '选项C'
        },
        checkValue: [
          'a', 'b'
        ],
        radioValue: 'a'
      }
    },
    computed: {
      eq: function () {
        return [{
          name: 'eq',
          value: this.value9
        }]
      }
    },
    methods: {
      clear: function () {
        this.value = ''
      },
      validate: function () {
        this.$refs.form.validate()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top .avatar{
    margin-top: 16px;
  }
  .avatar{
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    margin-right: 16px;
  }
  .content{
    padding: 16px 16px 16px 0;
    .title{
      margin-bottom: 16px;
    }
  }

</style>

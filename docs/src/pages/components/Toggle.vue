<template>
  <page-content page-title="组件 - 切换器">
    <docs-component>
      <div slot="description">
        <p>单独使用的切换器</p>
      </div>

      <div slot="api">
        <api-table name="tkui-tag">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>类型</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>string</code></md-table-cell>
                <md-table-cell>切换器类型</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>value</md-table-cell>
                <md-table-cell><code>bool</code></md-table-cell>
                <md-table-cell>切换器状态</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>disable</md-table-cell>
                <md-table-cell>不可用状态</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="toggle示例">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-toggle v-model="value"></tkui-toggle>
            <tkui-toggle v-model="value" type="radio"></tkui-toggle>
            <tkui-toggle v-model="value" type="check"></tkui-toggle>
            <tkui-toggle v-model="value" type="switch"></tkui-toggle>
            <tkui-toggle v-model="value" type="material"></tkui-toggle>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-toggle v-model=&quot;value&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle v-model=&quot;value&quot; type=&quot;radio&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle v-model=&quot;value&quot; type=&quot;check&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle v-model=&quot;value&quot; type=&quot;switch&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle v-model=&quot;value&quot; type=&quot;material&quot;&gt;&lt;/tkui-toggle&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="disable">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-toggle class="disable" v-model="value"></tkui-toggle>
            <tkui-toggle class="disable" v-model="value" type="radio"></tkui-toggle>
            <tkui-toggle class="disable" v-model="value" type="check"></tkui-toggle>
            <tkui-toggle class="disable" v-model="value" type="switch"></tkui-toggle>
            <tkui-toggle class="disable" v-model="value" type="material"></tkui-toggle>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-toggle class=&quot;disable&quot; v-model=&quot;value&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle class=&quot;disable&quot; v-model=&quot;value&quot; type=&quot;radio&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle class=&quot;disable&quot; v-model=&quot;value&quot; type=&quot;check&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle class=&quot;disable&quot; v-model=&quot;value&quot; type=&quot;switch&quot;&gt;&lt;/tkui-toggle&gt;
              &lt;tkui-toggle class=&quot;disable&quot; v-model=&quot;value&quot; type=&quot;material&quot;&gt;&lt;/tkui-toggle&gt;
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
        value: true
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

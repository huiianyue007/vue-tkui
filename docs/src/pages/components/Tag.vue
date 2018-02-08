<template>
  <page-content page-title="组件 - 标签">
    <docs-component>
      <div slot="description">
        <p>标签</p>
      </div>

      <div slot="api">
        <api-table name="tkui-tag">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>big</md-table-cell>
                <md-table-cell>大尺寸标签</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>small</md-table-cell>
                <md-table-cell>小尺寸标签</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>primary</md-table-cell>
                <md-table-cell>主色标签</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>accent</md-table-cell>
                <md-table-cell>衬色标签</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>danger</md-table-cell>
                <md-table-cell>警告色标签</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="普通标签">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-tag>标签1</tkui-tag>
            <tkui-tag class="primary">标签2</tkui-tag>
            <tkui-tag class="accent">标签3</tkui-tag>
            <tkui-tag class="danger">标签4</tkui-tag>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-tag&gt;标签1&lt;/tkui-tag&gt;
              &lt;tkui-tag class=&quot;primary&quot;&gt;标签2&lt;/tkui-tag&gt;
              &lt;tkui-tag class=&quot;accent&quot;&gt;标签3&lt;/tkui-tag&gt;
              &lt;tkui-tag class=&quot;danger&quot;&gt;标签4&lt;/tkui-tag&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="不同尺寸">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-tag class="primary small">标签1</tkui-tag>
            <tkui-tag class="primary">标签2</tkui-tag>
            <tkui-tag class="primary big">标签3</tkui-tag>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-tag class=&quot;primary small&quot;&gt;标签1&lt;/tkui-tag&gt;
              &lt;tkui-tag class=&quot;primary&quot;&gt;标签2&lt;/tkui-tag&gt;
              &lt;tkui-tag class=&quot;primary big&quot;&gt;标签3&lt;/tkui-tag&gt;
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

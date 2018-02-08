<template>
  <page-content page-title="组件 - 表格">
    <docs-component>
      <div slot="description">
        <p>表格</p>
      </div>

      <div slot="api">
        <api-table name="tkui-table">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>middle</md-table-cell>
                <md-table-cell>表格文本居中</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>right</md-table-cell>
                <md-table-cell>表格文本居右</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>header-fixed</md-table-cell>
                <md-table-cell>固定表格头部，表格高度不能为auto</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>average</md-table-cell>
                <md-table-cell>设置表格内所有行等宽</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>border</md-table-cell>
                <md-table-cell>表格内外边框</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="tkui-table-row">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>

              <md-table-row>
                <md-table-cell>border</md-table-cell>
                <md-table-cell>单行表格上边框</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>left</md-table-cell>
                <md-table-cell>表格文本居左</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>middle</md-table-cell>
                <md-table-cell>表格文本居中</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>right</md-table-cell>
                <md-table-cell>表格文本居右</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="tkui-table-cell">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>left</md-table-cell>
                <md-table-cell>表格文本居左</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>middle</md-table-cell>
                <md-table-cell>表格文本居中</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>right</md-table-cell>
                <md-table-cell>表格文本居右</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
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
                <md-table-cell>padding</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>单独设置一个单元格的padding</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>col</md-table-cell>
                <md-table-cell><code>String</code> <code>Number</code></md-table-cell>
                <md-table-cell>设置单元格行宽，默认为1</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="表格">
          <div class="avatar-holder tkui" slot="demo">
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
                <tkui-table-row>
                  <tkui-table-cell>王五</tkui-table-cell>
                  <tkui-table-cell class="right">13</tkui-table-cell>
                  <tkui-table-cell class="right">12</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">88</tkui-table-cell>
                </tkui-table-row>
                <tkui-table-row>
                  <tkui-table-cell>赵六</tkui-table-cell>
                  <tkui-table-cell class="right">12</tkui-table-cell>
                  <tkui-table-cell class="right">49</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">93</tkui-table-cell>
                </tkui-table-row>
              </tkui-table-body>
            </tkui-table>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-table&gt;
              &lt;tkui-table-header&gt;
              &lt;tkui-table-row class=&quot;middle&quot;&gt;
              &lt;tkui-table-cell&gt;姓名&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;年龄&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;学号&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;性别&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;分数&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/tkui-table-header&gt;
              &lt;tkui-table-body&gt;
              &lt;tkui-table-title&gt;3年1班&lt;/tkui-table-title&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell&gt;张三&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;13&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;73&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;87&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell&gt;李四&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;14&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;87&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;73&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-title&gt;3年2班&lt;/tkui-table-title&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell&gt;王五&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;13&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;12&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;88&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell&gt;赵六&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;12&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;49&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;93&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/tkui-table-body&gt;
              &lt;/tkui-table&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="表格边框">
          <div class="avatar-holder tkui" slot="demo">
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
                <tkui-table-row class="border">
                  <tkui-table-cell>张三</tkui-table-cell>
                  <tkui-table-cell class="right">13</tkui-table-cell>
                  <tkui-table-cell class="right">73</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">87</tkui-table-cell>
                </tkui-table-row>
                <tkui-table-row class="border">
                  <tkui-table-cell>李四</tkui-table-cell>
                  <tkui-table-cell class="right">14</tkui-table-cell>
                  <tkui-table-cell class="right">87</tkui-table-cell>
                  <tkui-table-cell>男</tkui-table-cell>
                  <tkui-table-cell class="right">73</tkui-table-cell>
                </tkui-table-row>
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

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-table&gt;
              &lt;tkui-table-header&gt;
              &lt;tkui-table-row class=&quot;middle&quot;&gt;
              &lt;tkui-table-cell&gt;姓名&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;年龄&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;学号&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;性别&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;分数&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/tkui-table-header&gt;
              &lt;tkui-table-body&gt;
              &lt;tkui-table-row class=&quot;border&quot;&gt;
              &lt;tkui-table-cell&gt;张三&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;13&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;73&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;87&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-row class=&quot;border&quot;&gt;
              &lt;tkui-table-cell&gt;李四&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;14&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;87&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;73&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-row class=&quot;border&quot;&gt;
              &lt;tkui-table-cell&gt;王五&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;13&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;12&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;88&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-row class=&quot;border&quot;&gt;
              &lt;tkui-table-cell&gt;赵六&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;12&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;49&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;93&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/tkui-table-body&gt;
              &lt;/tkui-table&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="头部固定">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-table class="header-fixed" style="height: 350px;">
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
                <template v-for="index in 10">
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
                </template>
              </tkui-table-body>
            </tkui-table>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-table class=&quot;header-fixed&quot; style=&quot;height: 350px;&quot;&gt;
              &lt;tkui-table-header&gt;
              &lt;tkui-table-row class=&quot;middle&quot;&gt;
              &lt;tkui-table-cell&gt;姓名&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;年龄&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;学号&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;性别&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;分数&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/tkui-table-header&gt;
              &lt;tkui-table-body&gt;
              &lt;template v-for=&quot;index in 10&quot;&gt;
              &lt;tkui-table-title&gt;3年1班&lt;/tkui-table-title&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell&gt;张三&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;13&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;73&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;87&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell&gt;李四&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;14&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;87&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;男&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell class=&quot;right&quot;&gt;73&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/template&gt;
              &lt;/tkui-table-body&gt;
              &lt;/tkui-table&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="宽度控制">
          <div class="avatar-holder tkui" slot="demo">
            <h4 class="md-header">注意：使用宽度控制时，tabel必须设置为 average</h4>
            <tkui-table class="average">
              <tkui-table-header>
                <tkui-table-row class="middle">
                  <tkui-table-cell col="2">长文本</tkui-table-cell>
                  <tkui-table-cell>短文本</tkui-table-cell>
                  <tkui-table-cell col="2">长文本</tkui-table-cell>
                  <tkui-table-cell>短文本</tkui-table-cell>
                  <tkui-table-cell col="3">超长文本</tkui-table-cell>
                </tkui-table-row>
              </tkui-table-header>
              <tkui-table-body>
                <template v-for="index in 3">
                  <tkui-table-row>
                    <tkui-table-cell col="2">长文本长文本长文本长文本长文本长文本长文本长文本长文本</tkui-table-cell>
                    <tkui-table-cell>短文本</tkui-table-cell>
                    <tkui-table-cell col="2">长文本长文本长文本长文本长文本长文本长文本长文本长文本</tkui-table-cell>
                    <tkui-table-cell>短文本</tkui-table-cell>
                    <tkui-table-cell col="3">长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本</tkui-table-cell>
                  </tkui-table-row>
                </template>
              </tkui-table-body>
            </tkui-table>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-table class=&quot;average&quot;&gt;
              &lt;tkui-table-header&gt;
              &lt;tkui-table-row class=&quot;middle&quot;&gt;
              &lt;tkui-table-cell col=&quot;2&quot;&gt;长文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;短文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell col=&quot;2&quot;&gt;长文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;短文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell col=&quot;3&quot;&gt;超长文本&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/tkui-table-header&gt;
              &lt;tkui-table-body&gt;
              &lt;template v-for=&quot;index in 3&quot;&gt;
              &lt;tkui-table-row&gt;
              &lt;tkui-table-cell col=&quot;2&quot;&gt;长文本长文本长文本长文本长文本长文本长文本长文本长文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;短文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell col=&quot;2&quot;&gt;长文本长文本长文本长文本长文本长文本长文本长文本长文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell&gt;短文本&lt;/tkui-table-cell&gt;
              &lt;tkui-table-cell col=&quot;3&quot;&gt;长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本&lt;/tkui-table-cell&gt;
              &lt;/tkui-table-row&gt;
              &lt;/template&gt;
              &lt;/tkui-table-body&gt;
              &lt;/tkui-table&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  import TkuiTableHeader from '../../../../src/components/table/tableHeader'
  import TkuiTableRow from '../../../../src/components/table/tableRow'
  import TkuiTableBody from '../../../../src/components/table/tableBody'
  export default {
    components: {
      TkuiTableBody,
      TkuiTableRow,
      TkuiTableHeader},
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

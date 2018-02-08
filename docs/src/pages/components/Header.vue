<template>
  <page-content page-title="组件 - 头部">
    <docs-component>
      <div slot="description">
        <p>app头部</p>
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
                <md-table-cell>center</md-table-cell>
                <md-table-cell>标题居中</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>background</md-table-cell>
                <md-table-cell>背景色</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>color</md-table-cell>
                <md-table-cell>文字颜色</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <h2 class="md-title">注意：</h2>
        <p><b>默认的header样式为白底黑字，这里为方便展示调整为绿底白字</b></p>
        <example-box card-title="默认">
          <div class="demo-wraper" slot="demo">
            <tkui-header>header</tkui-header>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-header&gt;header&lt;/tkui-header&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="居中">
          <div class="demo-wraper" slot="demo">
            <tkui-header center>header</tkui-header>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-header center&gt;header&lt;/tkui-header&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="左右按钮">
          <div class="demo-wraper" slot="demo">
            <tkui-header>
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              header
            </tkui-header>

            <tkui-header center>
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              header
              <div slot="right-menu">
                <tkui-button class="icon">
                  <tk-icon>setup</tk-icon>
                </tkui-button>
                <tkui-button class="icon">
                  <tk-icon>scan_code</tk-icon>
                </tkui-button>
              </div>
            </tkui-header>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-header&gt;
              &lt;tkui-button slot=&quot;left-menu&quot; class=&quot;icon&quot;&gt;&lt;tk-icon&gt;menu&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              header
              &lt;/tkui-header&gt;

              &lt;tkui-header center&gt;
              &lt;tkui-button slot=&quot;left-menu&quot; class=&quot;icon&quot;&gt;&lt;tk-icon&gt;keyboard_arrow_left&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              header
              &lt;div slot=&quot;right-menu&quot;&gt;
              &lt;tkui-button class=&quot;icon&quot;&gt;
              &lt;tk-icon&gt;search&lt;/tk-icon&gt;
              &lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon&quot;&gt;
              &lt;tk-icon&gt;more_vert&lt;/tk-icon&gt;
              &lt;/tkui-button&gt;
              &lt;/div&gt;
              &lt;/tkui-header&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="动态颜色">
          <div class="demo-wraper" slot="demo">
            <tkui-header background="#9c27b0" color="white">
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              header
            </tkui-header>

            <tkui-header background="white" color="#333">
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              header
            </tkui-header>

            <tkui-header background="#3f51b5" color="white">
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              header
            </tkui-header>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-header background=&quot;#9c27b0&quot; color=&quot;white&quot;&gt;
              &lt;tkui-button slot=&quot;left-menu&quot; class=&quot;icon&quot;&gt;&lt;tk-icon&gt;keyboard_arrow_left&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              header
              &lt;/tkui-header&gt;

              &lt;tkui-header background=&quot;white&quot; color=&quot;#333&quot;&gt;
              &lt;tkui-button slot=&quot;left-menu&quot; class=&quot;icon&quot;&gt;&lt;tk-icon&gt;keyboard_arrow_left&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              header
              &lt;/tkui-header&gt;

              &lt;tkui-header background=&quot;#3f51b5&quot; color=&quot;white&quot;&gt;
              &lt;tkui-button slot=&quot;left-menu&quot; class=&quot;icon&quot;&gt;&lt;tk-icon&gt;keyboard_arrow_left&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              header
              &lt;/tkui-header&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="自定颜色">
          <div class="demo-wraper" slot="demo">
            <tkui-header background="white" color="#333">
              <tkui-button slot="left-menu" class="icon"><tk-icon>return</tk-icon></tkui-button>
              添加 no-inherit 类名的元素不继承颜色
              <tkui-button slot="right-menu" class="icon danger no-inherit"><tk-icon>password</tk-icon></tkui-button>
            </tkui-header>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-header background=&quot;white&quot; color=&quot;#333&quot;&gt;
              &lt;tkui-button slot=&quot;left-menu&quot; class=&quot;icon&quot;&gt;&lt;tk-icon&gt;return&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              header
              &lt;tkui-button slot=&quot;right-menu&quot; class=&quot;icon danger no-inherit&quot;&gt;&lt;tk-icon&gt;password&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;/tkui-header&gt;
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
        index: 0,
        list2: ['文字1', '文字2', '文字3', '文字4', '文字5']
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
</style>

<template>
  <page-content page-title="组件 - 按钮">
    <docs-component>
      <div slot="description">
        <p>按钮</p>
      </div>

      <div slot="api">
        <api-table name="tkui-button">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>类名</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>primary</md-table-cell>
                <md-table-cell>主色按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>accent</md-table-cell>
                <md-table-cell>衬色按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>danger</md-table-cell>
                <md-table-cell>警告色按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>border</md-table-cell>
                <md-table-cell>带边框按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>raised</md-table-cell>
                <md-table-cell>强调按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>rounded</md-table-cell>
                <md-table-cell>圆角按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>icon</md-table-cell>
                <md-table-cell>圆形图标按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell>不可用按钮</md-table-cell>
              </md-table-row>


              <md-table-row>
                <md-table-cell>small</md-table-cell>
                <md-table-cell>小号按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>big</md-table-cell>
                <md-table-cell>大号按钮</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>block</md-table-cell>
                <md-table-cell>block按钮</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="默认">
          <div class="avatar-holder" slot="demo">
            <tkui-button>默认按钮</tkui-button>
            <tkui-button class="primary">主色按钮</tkui-button>
            <tkui-button class="accent">衬色按钮</tkui-button>
            <tkui-button class="danger">警告色按钮</tkui-button>
            <tkui-button class="disabled">不可用按钮</tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button&gt;默认按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;primary&quot;&gt;主色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;accent&quot;&gt;衬色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;danger&quot;&gt;警告色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;disabled&quot;&gt;不可用按钮&lt;/tkui-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="带边框的按钮">
          <div class="avatar-holder" slot="demo">
            <tkui-button class="border">默认按钮</tkui-button>
            <tkui-button class="border primary">主色按钮</tkui-button>
            <tkui-button class="border accent">衬色按钮</tkui-button>
            <tkui-button class="border danger">警告色按钮</tkui-button>
            <tkui-button class="border disabled">不可用按钮</tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button class=&quot;border&quot;&gt;默认按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border primary&quot;&gt;主色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border accent&quot;&gt;衬色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border danger&quot;&gt;警告色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border disabled&quot;&gt;不可用按钮&lt;/tkui-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="raised">
          <div class="avatar-holder" slot="demo">
            <tkui-button class="raised">默认按钮</tkui-button>
            <tkui-button class="raised primary">主色按钮</tkui-button>
            <tkui-button class="raised accent">衬色按钮</tkui-button>
            <tkui-button class="raised danger">警告色按钮</tkui-button>
            <tkui-button class="raised disabled">不可用按钮</tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button class=&quot;raised&quot;&gt;默认按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised primary&quot;&gt;主色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised accent&quot;&gt;衬色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised danger&quot;&gt;警告色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised disabled&quot;&gt;不可用按钮&lt;/tkui-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="圆角按钮">
          <div class="avatar-holder" slot="demo">
            <div>
              <tkui-button class="border rounded">默认按钮</tkui-button>
              <tkui-button class="border rounded primary">主色按钮</tkui-button>
              <tkui-button class="border rounded accent">衬色按钮</tkui-button>
              <tkui-button class="border rounded danger">警告色按钮</tkui-button>
              <tkui-button class="border rounded disabled">不可用按钮</tkui-button>
            </div>
            <div>
              <tkui-button class="raised rounded">默认按钮</tkui-button>
              <tkui-button class="raised rounded primary">主色按钮</tkui-button>
              <tkui-button class="raised rounded accent">衬色按钮</tkui-button>
              <tkui-button class="raised rounded danger">警告色按钮</tkui-button>
              <tkui-button class="raised rounded disabled">不可用按钮</tkui-button>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;div&gt;
              &lt;tkui-button class=&quot;border rounded&quot;&gt;默认按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border rounded primary&quot;&gt;主色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border rounded accent&quot;&gt;衬色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border rounded danger&quot;&gt;警告色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border rounded disabled&quot;&gt;不可用按钮&lt;/tkui-button&gt;
              &lt;/div&gt;
              &lt;div&gt;
              &lt;tkui-button class=&quot;raised rounded&quot;&gt;默认按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised rounded primary&quot;&gt;主色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised rounded accent&quot;&gt;衬色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised rounded danger&quot;&gt;警告色按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised rounded disabled&quot;&gt;不可用按钮&lt;/tkui-button&gt;
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="图标按钮">
          <div class="avatar-holder" slot="demo">
            <tkui-button class="icon"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon primary"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon accent"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon danger"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon disabled"><tk-icon>setup</tk-icon></tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button class=&quot;icon&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon primary&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon accent&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon danger&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon disabled&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="图标+文字">
          <div class="avatar-holder" slot="demo">
            <tkui-button class="raised small"><tk-icon>setup</tk-icon> 設置</tkui-button>
            <tkui-button class="raised normal"><tk-icon>setup</tk-icon> 設置</tkui-button>
            <tkui-button class="raised big"><tk-icon>setup</tk-icon> 設置</tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button class=&quot;raised small&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt; 首页&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt; 首页&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised big&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt; 首页&lt;/tkui-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="raised图标按钮">
          <div class="avatar-holder" slot="demo">
            <tkui-button class="icon raised small"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon raised primary"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon raised accent"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon raised danger"><tk-icon>setup</tk-icon></tkui-button>
            <tkui-button class="icon raised disabled"><tk-icon>setup</tk-icon></tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button class=&quot;icon raised&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon raised primary&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon raised accent&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon raised danger&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon raised disabled&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="按钮尺寸">
          <div class="avatar-holder" slot="demo">
            <div>
              <tkui-button class="small">普通按钮</tkui-button>
              <tkui-button class="small border">边框按钮</tkui-button>
              <tkui-button class="small raised">raised按钮</tkui-button>
              <tkui-button class="small rounded">圆角按钮</tkui-button>
              <tkui-button class="small icon"><tk-icon>home</tk-icon></tkui-button>
            </div>
            <div>
              <tkui-button class="">普通按钮</tkui-button>
              <tkui-button class="border">边框按钮</tkui-button>
              <tkui-button class="raised">raised按钮</tkui-button>
              <tkui-button class="rounded">圆角按钮</tkui-button>
              <tkui-button class="icon"><tk-icon>home</tk-icon></tkui-button>
            </div>
            <div>
              <tkui-button class="big">普通按钮</tkui-button>
              <tkui-button class="big border">边框按钮</tkui-button>
              <tkui-button class="big raised">raised按钮</tkui-button>
              <tkui-button class="big rounded">圆角按钮</tkui-button>
              <tkui-button class="big icon"><tk-icon>home</tk-icon></tkui-button>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;div&gt;
              &lt;tkui-button class=&quot;small&quot;&gt;普通按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;small border&quot;&gt;边框按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;small raised&quot;&gt;raised按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;small rounded&quot;&gt;圆角按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;small icon&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;/div&gt;
              &lt;div&gt;
              &lt;tkui-button class=&quot;&quot;&gt;普通按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;border&quot;&gt;边框按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised&quot;&gt;raised按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;rounded&quot;&gt;圆角按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;icon&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;/div&gt;
              &lt;div&gt;
              &lt;tkui-button class=&quot;big&quot;&gt;普通按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;big border&quot;&gt;边框按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;big raised&quot;&gt;raised按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;big rounded&quot;&gt;圆角按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;big icon&quot;&gt;&lt;tk-icon&gt;home&lt;/tk-icon&gt;&lt;/tkui-button&gt;
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="block按钮">
          <div class="avatar-holder" slot="demo">
            <tkui-button class="raised small block">small block按钮</tkui-button>
            <tkui-button class="raised block">block按钮</tkui-button>
            <tkui-button class="raised big block">big block按钮</tkui-button>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-button class=&quot;raised small block&quot;&gt;small block按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised block&quot;&gt;block按钮&lt;/tkui-button&gt;
              &lt;tkui-button class=&quot;raised big block&quot;&gt;big block按钮&lt;/tkui-button&gt;
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
  .md-avatar + .md-avatar {
    margin-left: 8px;
  }
  .tkui-button.normal>svg{
    height: 15.6px;
  }
</style>

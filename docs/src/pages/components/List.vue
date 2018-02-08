<template>
  <page-content page-title="组件 - 列表">
    <docs-component>
      <div slot="description">
        <p>列表</p>
      </div>

      <div slot="api">
        <api-table name="tkui-list">
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
                <md-table-cell>大尺寸列表</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>small</md-table-cell>
                <md-table-cell>小尺寸列表</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>top</md-table-cell>
                <md-table-cell>列表内容上对齐</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="tkui-list-item">
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
                <md-table-cell>下部完整边线</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>divider</md-table-cell>
                <md-table-cell>内容区边线</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disable-hover</md-table-cell>
                <md-table-cell>禁止鼠标悬浮效果</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="普通列表">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list>
              <tkui-list-item>列表1</tkui-list-item>
              <tkui-list-item>列表2</tkui-list-item>
              <tkui-list-item>列表3</tkui-list-item>
            </tkui-list>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-item&gt;列表1&lt;/tkui-list-item&gt;
              &lt;tkui-list-item&gt;列表2&lt;/tkui-list-item&gt;
              &lt;tkui-list-item&gt;列表3&lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="分栏">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list>
              <tkui-list-item>
                <tk-icon slot="left">location_border</tk-icon>
                列表1
              </tkui-list-item>
              <tkui-list-item>
                <tk-icon slot="left">location</tk-icon>
                左右分栏
                <tk-icon slot="right">next</tk-icon>
              </tkui-list-item>
              <tkui-list-item>
                <tk-icon slot="left">location_border</tk-icon>
                列表3
              </tkui-list-item>
            </tkui-list>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-item&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              列表1
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              左右分栏
              &lt;tk-icon slot=&quot;right&quot;&gt;check&lt;/tk-icon&gt;
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              列表3
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="边线列表">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list>
              <tkui-list-item>
                <tk-icon slot="left">location_border</tk-icon>
                没有边线
              </tkui-list-item>
              <tkui-list-item class="divider">
                <tk-icon slot="left">location_border</tk-icon>
                divider
              </tkui-list-item>
              <tkui-list-item class="border">
                <tk-icon slot="left">location_border</tk-icon>
                border
              </tkui-list-item>
            </tkui-list>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-item&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              没有边线
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;divider&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              divider
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              border
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="多行列表">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list>
              <tkui-list-item class="divider disable-hover">
                <img slot="left" src="assets/avatar-2.jpg"  class="avatar"/>
                <div class="content">
                  <div class="title">disable-hover</div>
                  <div class="des">禁用鼠标效果</div>
                </div>
              </tkui-list-item>
              <tkui-list-item class="divider">
                <img slot="left" src="assets/avatar-2.jpg"  class="avatar"/>
                <div class="content">
                  <div class="title">标题</div>
                  <div class="des">描述文字，描述文字，描述文字，描述文字</div>
                </div>
              </tkui-list-item>
              <tkui-list-item class="divider">
                <img slot="left" src="assets/avatar-2.jpg"  class="avatar"/>
                <div class="content">
                  <div class="title">标题</div>
                  <div class="des">描述文字，描述文字，描述文字，描述文字</div>
                </div>
              </tkui-list-item>
            </tkui-list>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list&gt;
              &lt;tkui-list-item class=&quot;divider disable-hover&quot;&gt;
              &lt;img slot=&quot;left&quot; src=&quot;assets/avatar-2.jpg&quot;  class=&quot;avatar&quot;/&gt;
              &lt;div class=&quot;content&quot;&gt;
              &lt;div class=&quot;title&quot;&gt;disable-hover&lt;/div&gt;
              &lt;div class=&quot;des&quot;&gt;禁用鼠标效果&lt;/div&gt;
              &lt;/div&gt;
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;divider&quot;&gt;
              &lt;img slot=&quot;left&quot; src=&quot;assets/avatar-2.jpg&quot;  class=&quot;avatar&quot;/&gt;
              &lt;div class=&quot;content&quot;&gt;
              &lt;div class=&quot;title&quot;&gt;标题&lt;/div&gt;
              &lt;div class=&quot;des&quot;&gt;描述文字，描述文字，描述文字，描述文字&lt;/div&gt;
              &lt;/div&gt;
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;divider&quot;&gt;
              &lt;img slot=&quot;left&quot; src=&quot;assets/avatar-2.jpg&quot;  class=&quot;avatar&quot;/&gt;
              &lt;div class=&quot;content&quot;&gt;
              &lt;div class=&quot;title&quot;&gt;标题&lt;/div&gt;
              &lt;div class=&quot;des&quot;&gt;描述文字，描述文字，描述文字，描述文字&lt;/div&gt;
              &lt;/div&gt;
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
            </code-block>
            <code-block lang="css">
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
            </code-block>
          </div>
        </example-box>

        <example-box card-title="上对齐">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-list class="top">
              <tkui-list-item>
                <img slot="left" src="assets/avatar-2.jpg"  class="avatar"/>
                <div>
                  <p>长文本</p>
                  <p>长文本</p>
                  <p>长文本</p>
                  <p>长文本</p>
                </div>
              </tkui-list-item>
              <tkui-list-item>
                <img slot="left" src="assets/avatar-2.jpg"  class="avatar"/>
                <div>
                  <p>长文本</p>
                  <p>长文本</p>
                  <p>长文本</p>
                  <p>长文本</p>
                </div>
              </tkui-list-item>
            </tkui-list>
          </div>
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list class=&quot;top&quot;&gt;
              &lt;tkui-list-item&gt;
              &lt;img slot=&quot;left&quot; src=&quot;assets/avatar-2.jpg&quot;  class=&quot;avatar&quot;/&gt;
              &lt;div&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;/div&gt;
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item&gt;
              &lt;img slot=&quot;left&quot; src=&quot;assets/avatar-2.jpg&quot;  class=&quot;avatar&quot;/&gt;
              &lt;div&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;p&gt;长文本&lt;/p&gt;
              &lt;/div&gt;
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="不同尺寸">
          <div class="avatar-holder tkui" slot="demo">
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
          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-list class=&quot;small&quot;&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              小尺寸
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              小尺寸
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
              &lt;br/&gt;&lt;br/&gt;
              &lt;tkui-list&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              普通尺寸
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              普通尺寸
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
              &lt;br/&gt;&lt;br/&gt;
              &lt;tkui-list class=&quot;big&quot;&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              大尺寸
              &lt;/tkui-list-item&gt;
              &lt;tkui-list-item class=&quot;border&quot;&gt;
              &lt;tk-icon slot=&quot;left&quot;&gt;list&lt;/tk-icon&gt;
              大尺寸
              &lt;/tkui-list-item&gt;
              &lt;/tkui-list&gt;
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

<template>
  <page-content page-title="组件 - 输入框">
    <docs-component>
      <div slot="description">
        <p>输入框</p>
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
                <md-table-cell>name</md-table-cell>
                <md-table-cell>名称，主要用于分辨validate返回值</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>label</md-table-cell>
                <md-table-cell>标题</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>value</md-table-cell>
                <md-table-cell>输入框的值</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>items</md-table-cell>
                <md-table-cell>多选或单选组件的选项，<code>object</code> 格式为{value=>display}</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>errorMessage</md-table-cell>
                <md-table-cell>错误信息</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>infoMessage</md-table-cell>
                <md-table-cell>提示信息</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>placeHolder</md-table-cell>
                <md-table-cell>占位提示信息</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>wrapLabel</md-table-cell>
                <md-table-cell>标题与输入框换行是否显示，默认false</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>wrap</md-table-cell>
                <md-table-cell>多选和单选列表是否换行显示，默认false</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>rulers</md-table-cell>
                <md-table-cell>输入值验证的规则</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>validateOnBlur</md-table-cell>
                <md-table-cell>在焦点离开输入框时自动验证，默认true</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>validateOnEmpty</md-table-cell>
                <md-table-cell>在输入值为空时是否验证，默认true</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell>输入框类型，可选值text, password, textarea, checkbox, radio</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="input类型">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-input v-model="value" label="账号"></tkui-input>
            <tkui-input type="password" v-model="value" label="密码" ></tkui-input>
            <tkui-input type="textarea" v-model="value" label="简介"></tkui-input>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-input v-model=&quot;value&quot; label=&quot;账号&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input type=&quot;password&quot; v-model=&quot;value&quot; label=&quot;密码&quot; &gt;&lt;/tkui-input&gt;
              &lt;tkui-input type=&quot;textarea&quot; v-model=&quot;value&quot; label=&quot;简介&quot;&gt;&lt;/tkui-input&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="图标">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-input v-model="value"><tk-icon slot="before">mobile_phone</tk-icon><tkui-button slot="after" class="icon" @click.native="clear"><tk-icon>close</tk-icon></tkui-button></tkui-input>
            <tkui-input type="password" v-model="value"><tk-icon slot="before">password</tk-icon></tkui-input>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-input v-model=&quot;value&quot;&gt;&lt;tk-icon slot=&quot;before&quot;&gt;mobile_phone&lt;/tk-icon&gt;&lt;tkui-button slot=&quot;after&quot; class=&quot;icon&quot; @click.native=&quot;clear&quot;&gt;&lt;tk-icon&gt;close&lt;/tk-icon&gt;&lt;/tkui-button&gt;&lt;/tkui-input&gt;
              &lt;tkui-input type=&quot;password&quot; v-model=&quot;value&quot;&gt;&lt;tk-icon slot=&quot;before&quot;&gt;password&lt;/tk-icon&gt;&lt;/tkui-input&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="提示信息">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-input v-model="value" label="账号" placeHolder="placeHolder"></tkui-input>
            <tkui-input v-model="value" label="账号" infoMessage="infoMessage"></tkui-input>
            <tkui-input v-model="value" label="账号" errorMessage="errorMessage"></tkui-input>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-input v-model=&quot;value&quot; label=&quot;账号&quot; placeHolder=&quot;placeHolder&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input v-model=&quot;value&quot; label=&quot;账号&quot; infoMessage=&quot;infoMessage&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input v-model=&quot;value&quot; label=&quot;账号&quot; errorMessage=&quot;errorMessage&quot;&gt;&lt;/tkui-input&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="多选">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-input type="checkbox" v-model="checkValue" :items="items" label="默认" placeHolder="placeHolder"></tkui-input>
            <tkui-input wrap type="checkbox" v-model="checkValue" :items="items" label="换行" placeHolder="placeHolder"></tkui-input>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-input type=&quot;checkbox&quot; v-model=&quot;checkValue&quot; :items=&quot;items&quot; label=&quot;默认&quot; placeHolder=&quot;placeHolder&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input wrap type=&quot;checkbox&quot; v-model=&quot;checkValue&quot; :items=&quot;items&quot; label=&quot;换行&quot; placeHolder=&quot;placeHolder&quot;&gt;&lt;/tkui-input&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="单选">
          <div class="avatar-holder tkui" slot="demo">
            <tkui-input type="radio" v-model="radioValue" :items="items" label="账号" placeHolder="placeHolder"></tkui-input>
            <tkui-input wrap type="radio" v-model="radioValue" :items="items" label="换行" placeHolder="placeHolder"></tkui-input>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-input type=&quot;radio&quot; v-model=&quot;radioValue&quot; :items=&quot;items&quot; label=&quot;账号&quot; placeHolder=&quot;placeHolder&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input wrap type=&quot;radio&quot; v-model=&quot;radioValue&quot; :items=&quot;items&quot; label=&quot;换行&quot; placeHolder=&quot;placeHolder&quot;&gt;&lt;/tkui-input&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="验证">
          <div class="avatar-holder tkui" slot="demo">
            <md-button @click.native="validate" class="md-primary md-raised">验证全部</md-button>
             <tkui-form ref="form">
               <tkui-input name="username" rulers="required" v-model="value1" label="required" placeHolder="不可为空"></tkui-input>
               <tkui-input rulers="min:10" v-model="value2" label="min" placeHolder="最小值"></tkui-input>
               <tkui-input rulers="max:4" v-model="value3" label="max" placeHolder="最大值"></tkui-input>
               <tkui-input rulers="minLength:3" v-model="value4" label="minLength" placeHolder="最小长度"></tkui-input>
               <tkui-input rulers="maxLength:8" v-model="value5" label="maxLength" placeHolder="最大长度"></tkui-input>
               <tkui-input rulers="email" v-model="value6" label="email" placeHolder="验证邮箱"></tkui-input>
               <tkui-input rulers="mobile" v-model="value7" label="mobile" placeHolder="验证手机号"></tkui-input>
               <tkui-input rulers="plateNumber" v-model="value8" label="plateNumber" placeHolder="验证车牌号"></tkui-input>
               <tkui-input v-model="value9" label="密码"></tkui-input>
               <tkui-input :rulers="eq" v-model="value10" label="验证相同"></tkui-input>
               <tkui-input rulers="min:5,email" v-model="value11" label="多项验证"></tkui-input>
               <tkui-input :rulers="customRuler" v-model="value12" label="自定义验证"></tkui-input>
             </tkui-form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;tkui-form ref=&quot;form&quot;&gt;
              &lt;tkui-input rulers=&quot;required&quot; v-model=&quot;value1&quot; label=&quot;required&quot; placeHolder=&quot;不可为空&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;min:10&quot; v-model=&quot;value2&quot; label=&quot;min&quot; placeHolder=&quot;最小值&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;max:4&quot; v-model=&quot;value3&quot; label=&quot;max&quot; placeHolder=&quot;最大值&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;minLength:3&quot; v-model=&quot;value4&quot; label=&quot;minLength&quot; placeHolder=&quot;最小长度&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;maxLength:8&quot; v-model=&quot;value5&quot; label=&quot;maxLength&quot; placeHolder=&quot;最大长度&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;email&quot; v-model=&quot;value6&quot; label=&quot;email&quot; placeHolder=&quot;验证邮箱&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;mobile&quot; v-model=&quot;value7&quot; label=&quot;mobile&quot; placeHolder=&quot;验证手机号&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;plateNumber&quot; v-model=&quot;value8&quot; label=&quot;plateNumber&quot; placeHolder=&quot;验证车牌号&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input v-model=&quot;value9&quot; label=&quot;密码&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input :rulers=&quot;eq&quot; v-model=&quot;value10&quot; label=&quot;验证相同&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input rulers=&quot;min:5,email&quot; v-model=&quot;value11&quot; label=&quot;多项验证&quot;&gt;&lt;/tkui-input&gt;
              &lt;tkui-input :rulers=&quot;customRuler&quot; v-model=&quot;value12&quot; label=&quot;自定义验证&quot;&gt;&lt;/tkui-input&gt;
              &lt;/tkui-form&gt;
            </code-block>
            <code-block lang="javascript">
              {
                data: () => {
                  value1: '',
                  value2: '',
                  value3: '',
                  value4: '',
                  value5: '',
                  value6: '',
                  value7: '',
                  value8: '',
                  value9: '',
                  value10: '',
                  value11: '',
                  value12: '',
                  customRuler: [
                    'required',
                    'minLength:10',
                    function (value) {
                      if (value[0] !== '$') {
                        return '必须以$开始'
                      }
                    }
                  ]
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
                  validate: function () {
                    this.$refs.form.validate()
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
  export default {
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
        radioValue: 'a',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        customRuler: [
          'required',
          'minLength:10',
          function (value) {
            if (value[0] !== '$') {
              return '必须以$开始'
            }
          }
        ]
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

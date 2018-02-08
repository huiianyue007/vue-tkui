webpackJsonp([8],{519:function(e,l,a){"use strict";function t(e){a(563)}Object.defineProperty(l,"__esModule",{value:!0});var u=a(530),i=a.n(u),n=a(580),o=a(0),r=t,v=o(i.a,n.a,r,"data-v-92659a28",null);l.default=v.exports},530:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={data:function(){return{value:"",items:{a:"选项A",b:"选项B",c:"选项C"},checkValue:["a","b"],radioValue:"a",value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value12:"",customRuler:["required","minLength:10",function(e){if("$"!==e[0])return"必须以$开始"}]}},computed:{eq:function(){return[{name:"eq",value:this.value9}]}},methods:{clear:function(){this.value=""},validate:function(){this.$refs.form.validate()}}},e.exports=l.default},550:function(e,l,a){l=e.exports=a(512)(),l.push([e.i,".top .avatar[data-v-92659a28]{margin-top:16px}.avatar[data-v-92659a28]{max-width:40px;max-height:40px;border-radius:50%;margin-right:16px}.content[data-v-92659a28]{padding:16px 16px 16px 0}.content .title[data-v-92659a28]{margin-bottom:16px}",""])},563:function(e,l,a){var t=a(550);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a(513)("49c52f78",t,!0)},580:function(e,l,a){"use strict";var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("page-content",{attrs:{"page-title":"组件 - 输入框"}},[a("docs-component",[a("div",{slot:"description"},[a("p",[e._v("输入框")])]),e._v(" "),a("div",{slot:"api"},[a("api-table",{attrs:{name:"md-avatar"}},[a("md-table",{slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("名称")]),e._v(" "),a("md-table-head",[e._v("说明")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("name")]),e._v(" "),a("md-table-cell",[e._v("名称，主要用于分辨validate返回值")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("label")]),e._v(" "),a("md-table-cell",[e._v("标题")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("value")]),e._v(" "),a("md-table-cell",[e._v("输入框的值")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("items")]),e._v(" "),a("md-table-cell",[e._v("多选或单选组件的选项，"),a("code",[e._v("object")]),e._v(" 格式为{value=>display}")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("errorMessage")]),e._v(" "),a("md-table-cell",[e._v("错误信息")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("infoMessage")]),e._v(" "),a("md-table-cell",[e._v("提示信息")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("placeHolder")]),e._v(" "),a("md-table-cell",[e._v("占位提示信息")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("wrapLabel")]),e._v(" "),a("md-table-cell",[e._v("标题与输入框换行是否显示，默认false")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("wrap")]),e._v(" "),a("md-table-cell",[e._v("多选和单选列表是否换行显示，默认false")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("rulers")]),e._v(" "),a("md-table-cell",[e._v("输入值验证的规则")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("validateOnBlur")]),e._v(" "),a("md-table-cell",[e._v("在焦点离开输入框时自动验证，默认true")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("validateOnEmpty")]),e._v(" "),a("md-table-cell",[e._v("在输入值为空时是否验证，默认true")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("type")]),e._v(" "),a("md-table-cell",[e._v("输入框类型，可选值text, password, textarea, checkbox, radio")])],1)],1)],1)],1)],1),e._v(" "),a("div",{slot:"example"},[a("example-box",{attrs:{"card-title":"input类型"}},[a("div",{staticClass:"avatar-holder tkui",slot:"demo"},[a("tkui-input",{attrs:{label:"账号"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),e._v(" "),a("tkui-input",{attrs:{type:"password",label:"密码"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),e._v(" "),a("tkui-input",{attrs:{type:"textarea",label:"简介"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <tkui-input v-model="value" label="账号"></tkui-input>\n            <tkui-input type="password" v-model="value" label="密码" ></tkui-input>\n            <tkui-input type="textarea" v-model="value" label="简介"></tkui-input>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"图标"}},[a("div",{staticClass:"avatar-holder tkui",slot:"demo"},[a("tkui-input",{model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("tk-icon",{slot:"before"},[e._v("mobile_phone")]),a("tkui-button",{staticClass:"icon",nativeOn:{click:function(l){e.clear(l)}},slot:"after"},[a("tk-icon",[e._v("close")])],1)],1),e._v(" "),a("tkui-input",{attrs:{type:"password"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("tk-icon",{slot:"before"},[e._v("password")])],1)],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <tkui-input v-model="value"><tk-icon slot="before">mobile_phone</tk-icon><tkui-button slot="after" class="icon" @click.native="clear"><tk-icon>close</tk-icon></tkui-button></tkui-input>\n            <tkui-input type="password" v-model="value"><tk-icon slot="before">password</tk-icon></tkui-input>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"提示信息"}},[a("div",{staticClass:"avatar-holder tkui",slot:"demo"},[a("tkui-input",{attrs:{label:"账号",placeHolder:"placeHolder"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),e._v(" "),a("tkui-input",{attrs:{label:"账号",infoMessage:"infoMessage"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),e._v(" "),a("tkui-input",{attrs:{label:"账号",errorMessage:"errorMessage"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <tkui-input v-model="value" label="账号" placeHolder="placeHolder"></tkui-input>\n            <tkui-input v-model="value" label="账号" infoMessage="infoMessage"></tkui-input>\n            <tkui-input v-model="value" label="账号" errorMessage="errorMessage"></tkui-input>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"多选"}},[a("div",{staticClass:"avatar-holder tkui",slot:"demo"},[a("tkui-input",{attrs:{type:"checkbox",items:e.items,label:"默认",placeHolder:"placeHolder"},model:{value:e.checkValue,callback:function(l){e.checkValue=l},expression:"checkValue"}}),e._v(" "),a("tkui-input",{attrs:{wrap:"",type:"checkbox",items:e.items,label:"换行",placeHolder:"placeHolder"},model:{value:e.checkValue,callback:function(l){e.checkValue=l},expression:"checkValue"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <tkui-input type="checkbox" v-model="checkValue" :items="items" label="默认" placeHolder="placeHolder"></tkui-input>\n            <tkui-input wrap type="checkbox" v-model="checkValue" :items="items" label="换行" placeHolder="placeHolder"></tkui-input>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"单选"}},[a("div",{staticClass:"avatar-holder tkui",slot:"demo"},[a("tkui-input",{attrs:{type:"radio",items:e.items,label:"账号",placeHolder:"placeHolder"},model:{value:e.radioValue,callback:function(l){e.radioValue=l},expression:"radioValue"}}),e._v(" "),a("tkui-input",{attrs:{wrap:"",type:"radio",items:e.items,label:"换行",placeHolder:"placeHolder"},model:{value:e.radioValue,callback:function(l){e.radioValue=l},expression:"radioValue"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <tkui-input type="radio" v-model="radioValue" :items="items" label="账号" placeHolder="placeHolder"></tkui-input>\n            <tkui-input wrap type="radio" v-model="radioValue" :items="items" label="换行" placeHolder="placeHolder"></tkui-input>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"验证"}},[a("div",{staticClass:"avatar-holder tkui",slot:"demo"},[a("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(l){e.validate(l)}}},[e._v("验证全部")]),e._v(" "),a("tkui-form",{ref:"form"},[a("tkui-input",{attrs:{name:"username",rulers:"required",label:"required",placeHolder:"不可为空"},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"min:10",label:"min",placeHolder:"最小值"},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"max:4",label:"max",placeHolder:"最大值"},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"minLength:3",label:"minLength",placeHolder:"最小长度"},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"maxLength:8",label:"maxLength",placeHolder:"最大长度"},model:{value:e.value5,callback:function(l){e.value5=l},expression:"value5"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"email",label:"email",placeHolder:"验证邮箱"},model:{value:e.value6,callback:function(l){e.value6=l},expression:"value6"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"mobile",label:"mobile",placeHolder:"验证手机号"},model:{value:e.value7,callback:function(l){e.value7=l},expression:"value7"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"plateNumber",label:"plateNumber",placeHolder:"验证车牌号"},model:{value:e.value8,callback:function(l){e.value8=l},expression:"value8"}}),e._v(" "),a("tkui-input",{attrs:{label:"密码"},model:{value:e.value9,callback:function(l){e.value9=l},expression:"value9"}}),e._v(" "),a("tkui-input",{attrs:{rulers:e.eq,label:"验证相同"},model:{value:e.value10,callback:function(l){e.value10=l},expression:"value10"}}),e._v(" "),a("tkui-input",{attrs:{rulers:"min:5,email",label:"多项验证"},model:{value:e.value11,callback:function(l){e.value11=l},expression:"value11"}}),e._v(" "),a("tkui-input",{attrs:{rulers:e.customRuler,label:"自定义验证"},model:{value:e.value12,callback:function(l){e.value12=l},expression:"value12"}})],1)],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <tkui-form ref="form">\n            <tkui-input rulers="required" v-model="value1" label="required" placeHolder="不可为空"></tkui-input>\n            <tkui-input rulers="min:10" v-model="value2" label="min" placeHolder="最小值"></tkui-input>\n            <tkui-input rulers="max:4" v-model="value3" label="max" placeHolder="最大值"></tkui-input>\n            <tkui-input rulers="minLength:3" v-model="value4" label="minLength" placeHolder="最小长度"></tkui-input>\n            <tkui-input rulers="maxLength:8" v-model="value5" label="maxLength" placeHolder="最大长度"></tkui-input>\n            <tkui-input rulers="email" v-model="value6" label="email" placeHolder="验证邮箱"></tkui-input>\n            <tkui-input rulers="mobile" v-model="value7" label="mobile" placeHolder="验证手机号"></tkui-input>\n            <tkui-input rulers="plateNumber" v-model="value8" label="plateNumber" placeHolder="验证车牌号"></tkui-input>\n            <tkui-input v-model="value9" label="密码"></tkui-input>\n            <tkui-input :rulers="eq" v-model="value10" label="验证相同"></tkui-input>\n            <tkui-input rulers="min:5,email" v-model="value11" label="多项验证"></tkui-input>\n            <tkui-input :rulers="customRuler" v-model="value12" label="自定义验证"></tkui-input>\n            </tkui-form>\n          ')]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            {\n              data: () => {\n                value1: '',\n                value2: '',\n                value3: '',\n                value4: '',\n                value5: '',\n                value6: '',\n                value7: '',\n                value8: '',\n                value9: '',\n                value10: '',\n                value11: '',\n                value12: '',\n                customRuler: [\n                  'required',\n                  'minLength:10',\n                  function (value) {\n                    if (value[0] !== '$') {\n                      return '必须以$开始'\n                    }\n                  }\n                ]\n              },\n              computed: {\n                eq: function () {\n                  return [{\n                    name: 'eq',\n                    value: this.value9\n                  }]\n                }\n              },\n              methods: {\n                validate: function () {\n                  this.$refs.form.validate()\n                }\n              }\n            }\n          ")])],1)])],1)])],1)},u=[],i={render:t,staticRenderFns:u};l.a=i}});
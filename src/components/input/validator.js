export default {
  required: function (value) {
    if (!value || value.length === 0) {
      return '不可为空'
    }
  },
  min: function (value, min = 0) {
    if (!(/^[\d\.]+$/).test(value)) {
      return '请填写一个数字'
    } else if (Number(value) < min) {
      return `不能小于 ${min}`
    }
  },
  max: function (value, max) {
    if (!(/^[\d\.]+$/).test(value)) {
      return '请填写一个数字'
    } else if (Number(value) > max) {
      return `不能大于 ${max}`
    }
  },
  minLength: function (value, min = 0) {
    if (value.length < min) {
      return `长度不能小于 ${min}`
    }
  },
  maxLength: function (value, max = 0) {
    if (value.length > max) {
      return `长度不能大于 ${max}`
    }
  },
  email: function (value) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)) {
      return '请填写正确的邮箱地址'
    }
  },
  mobile: function (value) {
    if (!(/^1[3|4|5|7|8][0-9]{9}$/).test(value)) {
      return '请填写正确的手机号'
    }
  },
  plateNumber: function (value) {
    let reg = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/
    if (!reg.test(value)) {
      return '请输入正确的车牌号'
    }
  },
  eq: function (value, eqValue) {
    if (value !== eqValue) {
      return '请填写一致'
    }
  }
}

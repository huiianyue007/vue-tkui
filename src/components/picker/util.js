export function getElement (expr) {
  return typeof expr === 'string' ? document.querySelector(expr) : expr
}

export function getComputedStyle (el, key) {
  let computedStyle = window.getComputedStyle(el)
  return computedStyle[key] || ''
}

let passiveSupported = false

try {
  Object.defineProperty({}, 'passive', {
    get: function () {
      passiveSupported = true
    }
  })
} catch (e) {
  // do nothing
}
export {passiveSupported}

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.
export function easeOutCubic (pos) {
  return Math.pow(pos - 1, 3) + 1
}

export function easeInOutCubic (pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3)
  }
  return 0.5 * (Math.pow(pos - 2, 3) + 2)
}

export function value2name (value, list, delimiter) {
  if (value && !list.length) {
    return ''
  }
  if (!delimiter) {
    delimiter = ' '
  }

  let rs = value.map((one, index) => {
    if (list.length && Object.prototype.toString.call(list[0]) === '[object Array]') {
      return list[index].find((item) => {
        return item.value === one
      })
    }
    return list.find((item) => {
      return item.value === one
    })

  })
  rs = rs.filter((one) => {
    return typeof one !== 'undefined'
  })
  return rs.map((one) => {
    return one.name
  }).join(delimiter).replace('--', '')
}

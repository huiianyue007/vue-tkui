<template>
  <div class="tkui-input-container" :class="{'has-error': hasError}" @click="focus">
    <div class="tkui-input-body-warp" :class="{'wrap-label': wrapLabel}">
      <label class="tkui-label" v-if="label">{{label}}</label>
      <div class="tkui-input-body">
        <div class="tkui-input-before" v-if="!!$slots.before">
          <slot name="before"></slot>
        </div>
        <div class="input-wrap">
          <textarea class="tkui-input" v-if="type === 'textarea'" v-on:input="updateValue($event.target.value)" :placeholder="placeHolder" ref="input" :value="value" @blur="blur"></textarea>
          <div class="tkui-input checkbox-list" :class="{'wrap': wrap}" v-else-if="type === 'checkbox'" ref="input">
            <div class="checkbox-wrap" @click="check(name)" :class="{'checked': hasChecked(name)}" v-for="show, name in items">
              <span class="checkbox"></span><span class="checkbox-label">{{show}}</span>
            </div>
          </div>
          <div class="tkui-input radio-list" :class="{'wrap': wrap}" v-else-if="type === 'radio'" ref="input">
            <div class="radio-wrap" @click="updateValue(name)" :class="{'checked': hasChecked(name)}" v-for="show, name in items">
              <span class="radio"></span><span class="radio-label">{{show}}</span>
            </div>
          </div>
          <input class="tkui-input" size="1"  v-else :type="type" v-bind:value="value" v-on:input="updateValue($event.target.value)" :placeholder="placeHolder" ref="input" @blur="blur"/>
          <div class="tkui-input-message" v-if="message">
            {{message}}
          </div>
        </div>
        <div class="tkui-input-after"  v-if="!!$slots.after">
          <slot name="after"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import validator from './validator'
  export default {
    name: 'tkui-input',
    data: function () {
      return {
        validateMessage: null
      }
    },
    methods: {
      check: function (name) {
        let value = this.value.slice()
        let index = value.indexOf(name)
        if (index === -1) {
          value.push(name)
        } else {
          value.splice(index, 1)
        }
        this.updateValue(value)
      },
      focus: function () {
        this.$refs.input.focus()
      },
      updateValue: function (value) {
        this.$emit('input', value)
        if (this.type === 'radio' || this.type === 'checkbox' || this.validateOnBlur && this.validateMessage) {
          let self = this
          this.$nextTick(() => {
            self.validate()
          })
        }
      },
      hasChecked: function (name) {
        if (typeof this.value === 'object') {
          return this.value.indexOf(name) >= 0
        }
        return this.value === name
      },
      blur: function () {
        if (this.validateOnBlur) {
          this.validate()
        }
      },
      validate: function (silence) {
        let error
        let value = this.value
        if (!value && !this.validateOnEmpty) {
          return
        }
        if (this._rulers) {
          for (let ruler of this._rulers) {
            if (typeof ruler === 'string') {
              if (validator[ruler]) {
                error = validator[ruler](value)
              } else {
                console.error(`没有 ${ruler} 校验方法`)
              }
            } else if (typeof ruler === 'function') {
              error = ruler(value)
            } else if (validator[ruler.name]) {
              error = validator[ruler.name](value, ruler.value)
            } else {
              console.error(`没有 ${ruler.name} 校验方法`)
            }
            if (error) {
              if (!silence) {
                this.validateMessage = error
              }
              break
            } else {
              this.validateMessage = null
            }
          }
        }
        if (error) {
          return {
            name: this.name,
            label: this.label,
            type: this.type,
            message: error
          }
        }
      }
    },
    computed: {
      message: function () {
        return this.validateMessage || this.errorMessage || this.infoMessage
      },
      hasError: function () {
        return this.errorMessage || this.validateMessage
      },
      _rulers: function () {
        if (!this.rulers) return null
        let validator = []
        if (typeof this.rulers === 'string') {
          validator = this.rulers.split(',')
        } else {
          validator = this.rulers
        }
        return validator.map((value) => {
          if (typeof value === 'string' && value.indexOf(':') > 0) {
            let [name, val] = value.split(':')
            return {name: name, value: val}
          }
          return value
        })
      }
    },
    props: {
      name: String,
      label: String,
      value: [String, Array],
      items: {
        type: Object,
        default: () => {}
      },
      errorMessage: String,
      infoMessage: String,
      placeHolder: String,
      wrapLabel: Boolean,
      wrap: Boolean,
      rulers: [String, Array],
      validateOnBlur: {
        type: Boolean,
        default: true
      },
      validateOnEmpty: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

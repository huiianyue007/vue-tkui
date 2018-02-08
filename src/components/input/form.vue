<template>
  <form class="tkui-form" enctype="multipart/form-data"><slot></slot></form>
</template>

<script>
  export default {
    name: 'tkui-form',
    methods: {
      validate: function (silence, children = this.$children) {
        let errors = []
        let self = this
        for (let component of children) {
          if (component.$options.name === 'tkui-input') {
            let error = component.validate(silence)
            if (error) {
              errors.push(error)
            }
          } else if (component.$children.length !== 0) {
            let childrenErrors = self.validate(silence, component.$children)
            errors = errors.concat(childrenErrors)
          }
        }
        return errors
      }
    }
  }
</script>

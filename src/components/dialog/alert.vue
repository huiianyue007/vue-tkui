<template>
  <modal center :show.sync="show">
    <div class="subhead">
      {{message}}
    </div>
  </modal>
</template>

<script>
  import modal from './dialog.vue'
  export default {
    name: 'tkui-alert',
    data () {
      return {
        show: false,
        message: '',
        onClose: null
      }
    },
    methods: {
      open (message, options = {}) {
        this.message = message
        this.show = true
        this.onClose = options.onClose
      }
    },
    watch: {
      show () {
        if (!this.show && this.onClose) {
          this.onClose()
          this.onClose = null
        }
      }
    },
    components: {
      modal
    }
  }
</script>

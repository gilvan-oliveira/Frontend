<template>
  <q-select v-model="model" :options="options" label="Perfils" />
</template>

<script>
import { QSelect } from 'quasar'
export default {
  components: {
    QSelect
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      require: true,
      type: Number
    }
  },
  data () {
    return {}
  },
  computed: {
    model: {
      get () {
        return this.options.find(x => x.value === this.value)
      },
      set (val) {
        this.$emit('input', val.value)
      }
    }
  }
}
</script>

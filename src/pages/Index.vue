<template>
  <q-page class="flex flex-center">
    <b-select v-model="model" :options="options"/>
  </q-page>
</template>

<script>
import BSelect from 'src/components/selects/BSelect'
import { User } from 'src/Services'
export default {
  components: {
    BSelect
  },
  data () {
    return {
      model: 3,
      options: []
    }
  },
  methods: {
    toOptions (arr, { label, value }) {
      return arr.map(x => (
        { value: x[value], label: x[label] }
      ))
    },
    async loadItems () {
      const user = await User.galAll()
      const convert = {
        label: 'name',
        value: 'id'
      }

      this.options = this.toOptions(user, convert)
    }
  },
  beforeMount () {
    this.loadItems()
  }
}
</script>
